const followers = document.querySelectorAll('.followers');

followers.forEach(followersCount => {
    followersCount.innerHTML = "0";

    const updateFollowersCounter = ()=>{
        const target = +followersCount.getAttribute('data-target');
        const c = +followersCount.innerText;
        
        const increment = target / 500;
        if(c<target){
            followersCount.innerHTML = `${Math.ceil(c + increment)}`
            setTimeout(updateFollowersCounter,1)
        }
        else{
            followersCount.innerHTML = target;
        }
    };
    updateFollowersCounter();
})