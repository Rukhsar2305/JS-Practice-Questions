let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=>{
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage(){
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e){
        return "No Image found";
    }
};

//sending headers with api requests
const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = { headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}