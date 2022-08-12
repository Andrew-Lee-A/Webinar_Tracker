import pandas as pd
from bs4 import BeautifulSoup
import requests

url = 'https://www.engineeringnz.org/courses-events'
response = requests.get(url)
soup = BeautifulSoup(response.content,'html.parser')

