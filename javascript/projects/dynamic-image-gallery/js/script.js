document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready
      const digPrefix= "ig";
      DIG({
          prefix:"ig",
          formSelector:`form`,
          formInputSelector: `form`
    })
    }
  };