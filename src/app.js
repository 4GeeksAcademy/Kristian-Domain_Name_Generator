import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our", "an"]
  let adj = ["incredible", "invincible", "amazing", "awesome"]
  let noun = ["coder", "hacker", "programmer", "geek"]
  let ext = [".com", ".net", ".co", ".arg"]

    function myDomain(){
      const newDomains = []

      for (let i = 0; i < pronoun.length; i++) {
        newDomains.push(pronoun[i])
        for (let j = 0; j < adj.length; j++) {
          newDomains.push(adj[j])
          for (let k = 0; k < noun.length; k++) {
            newDomains.push(noun[k])
            for (let l = 0; l < ext.length; l++) {
              newDomains.push(ext[l])
              
            }
          }
        }
        return newDomains
      }
      
      
    }
  const result = myDomain()

  console.log(result);
};
