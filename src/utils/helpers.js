import { APPS } from "./constants"

export const getApp = ()=>{
  const subdomain = getSubdomain(window.location.hostname)


  const main = APPS.find(app=>app.main)
  


//   path selection

if (!subdomain==="") return main.app

  const app = APPS.find(app=>app.subdomain === subdomain)

  
  if(!app) return main.app;
  return app.app

}

export const getSubdomain = (location)=>{
    const locationparts = location.split('.')
    let sliceTill = -2

    // for localhost 

    const isLocalhost = locationparts.slice(-1)[0] === 'localhost'
    
  const isNetlify = locationparts.slice(-1)[0] === 'netlify'
   
   if (isLocalhost)  {
    sliceTill=-1

  return locationparts.slice(0, sliceTill).join('');
   }
   if(isNetlify) {
    return locationparts.slice(0, sliceTill).join('');

   }


  // for netlify 


}