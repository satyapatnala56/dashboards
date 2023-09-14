import { useEffect } from "react";

const useOutsideClick = (ref, cb) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cb(e);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
