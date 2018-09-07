function setCookie(cookieKey, cookieValue, expiration = "") {
  const cookie = `${cookieKey}=${cookieValue}; ${
    expiration ? `expires=${expiration};` : ""
  }`;

  document.cookie = cookie;
}

function getCookie(cookieKey) {
  let cookies = document.cookie.split(";");
  let separateCookie = cookies.find(function(cookie) {
    return cookie.indexOf(cookieKey) != 1;
  });

  return separateCookie.slice(separateCookie.indexOf("=") + 1);
}

function deleteCookie(cookieKey) {
  document.cookie = `${cookieKey}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { setCookie, getCookie, deleteCookie };
