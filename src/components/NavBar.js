import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navs=links.map((link)=>{
    let url =`#${link}`

    return (<a href={url}  key= {link}>{link}</a>)


  })

  return <nav>{navs}</nav>;
}

export default NavBar;
