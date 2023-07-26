function toggleQuestion(elementID)
{
    console.log(elementID);
    let questionBody = document.getElementById(elementID);
    questionBody.classList.toggle("active");
    questionBody.classList.toggle("default");
}