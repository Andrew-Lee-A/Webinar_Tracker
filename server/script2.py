from bs4 import BeautifulSoup
import requests
import pandas as pd
from pandas import DataFrame

url = 'https://www.engineeringnz.org/courses-events'
response = requests.get(url)
soup = BeautifulSoup(response.content,'html.parser')

title = []
date_time = []
price = []
CPD_Hours= []
reg=[]

course_data = soup.findAll('div',attrs={'class':'width-1/2@xsmall width-1/3@medium'})

for store in course_data:
    titles  = store.h5.text.replace('\n','').strip()
    title.append(titles)
    
    cost = store.a.p.text.replace('\n','').strip()
    price.append(cost)
    
    Hours_elems=store.a.find_all('p', class_= 'u-text-xs u-text-medium u-text-right')
    Hours =[elem.get_text() for elem in Hours_elems]
    
    
    CPD_Hours.append(Hours)

CPD =" ".join([str(item) for item in CPD_Hours])
CPD = CPD.replace("\\n","")
CPD = CPD.replace("  ","")
CPD = CPD.replace("[","")
CPD = CPD.replace("]",",")
CPD = CPD.replace("hrs",".")
CPD = CPD.replace("hr",".")
CPD = CPD.replace("mins","")
CPD = CPD.replace("'","")
CPD = CPD.replace(" ","")
CPD = CPD.replace("CPD","")

def CPD_Convert(string):
    li = list(string.split(","))
    return li

CPD = CPD_Convert(CPD)

calender = soup.findAll('p',attrs={'class':'t-color-light-grey u-text-uppercase u-space-xs'})

for store in calender:
    date_elems = store
    date =[elem.get_text() for elem in date_elems]
    date_time.append(date)

date_time =" ".join([str(item) for item in date_time])
date_time = date_time.replace("[","")
date_time = date_time.replace("]",":")
date_time = date_time.replace("'","")

date_time =date_timeConvert(date_time)

reg_link = soup.findAll('a',class_='link-complex link--no-style',href=True)

reg =",".join([str(item) for item in reg])

reg = CPD_Convert(reg)

result = list(zip(title,price,CPD,date_time,reg))
result

df = pd.set_option('display.max_rows',5000)
df = pd.set_option('display.max_columns',5000)
df = pd.set_option('display.width',100000)
df = pd.DataFrame(result, columns=['Webinar Title','Price','CPD Points','Date and Time','Registration Link'])

df.head(30)

print(df.head(30))

