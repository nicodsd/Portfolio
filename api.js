let apiUrl = "https://portafolio-back-36us.onrender.com/"

if (process.env.NODE_ENV==='production'){
    apiUrl = process.env.REACT_APP_URL
}

export default apiUrl