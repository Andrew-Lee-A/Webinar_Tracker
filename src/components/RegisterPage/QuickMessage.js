import { toast } from "react-toastify";

export const reminder = (text, type) => {

    if (type === "success") {
        toast.success(text, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    } else if (type === "warning") {
        toast.warn(text, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(text, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
}