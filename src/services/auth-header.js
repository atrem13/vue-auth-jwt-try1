export default function authHeader(){
  let user = JSON.parse(localStorage.getItem('user'));

  if(user && user.accessToken){
    // normali like below
    // return {Authorization:'Bearer' + user.accessToken};

    // but for nodejs express use this one
    return {"x-access-token": user.accessToken};
  }else{
    return{};
  }
}