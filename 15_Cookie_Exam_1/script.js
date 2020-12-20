
class CookieUtil {
  static get(name) {
    console.log(`all cookies: ${document.cookie}`);
    let cookieName = `${encodeURIComponent(name)}=`,
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
    console.log(`cookieName = ${cookieName}`);
    console.log(`cookieStart = ${cookieStart}`);
 

    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(";", cookieStart);
      console.log(`cookieEnd = ${cookieEnd}`);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      );
        console.log(`cookieValue = ${cookieValue}`);
    }

    return cookieValue;
  }

  static set(name, value, expires) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

   

    if(expires){
     cookieText += `; max-age=${expires}`;
    }
    console.log(`cookieText = ${cookieText}`);
    document.cookie=cookieText;
  }

  static unset(name) {
    CookieUtil.set(name, "none", new Date(0));
  }
}

let favor = { name: "favorWeb", url: "https://www.google.com/" };
let replaceFavor = { name: "favorWeb", url: "https://www.sit.kmutt.ac.th/" };


//1-2. set cookies 
CookieUtil.set(favor.name, favor.url);
alert(`CookieUtil.get(${favor.name}: ${CookieUtil.get(favor.name)}`);

CookieUtil.set("user", "umaporn");


//3. overwrite cookies
CookieUtil.set(replaceFavor.name, replaceFavor.url,(60 * 60 * 24 * 10)); //overwrite because same path and name
alert(
  `CookieUtil.get(${replaceFavor.name}) ${CookieUtil.get(replaceFavor.name)}`
); 



//4. remove with replace the previous url
CookieUtil.unset("user");






        