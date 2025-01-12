window.onload = function(){
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    function headerData(){
        return axios.get("./components/header.html") ;
    }

    function footerData(){
        return axios.get("./components/footer.html") ;
    }

    axios.all([headerData(),footerData()])
    .then(axios.spread(function(resHeader,resFooter){
        console.log(resHeader.data,resFooter.data)
        header.innerHTML = resHeader.data;
        footer.innerHTML = resFooter.data;
    })).catch(function(error){
        console.log(error)
    })
}