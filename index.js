const generateMemeBtn = document.querySelector(
  ".meme_generator .generate_meme_btn"
);
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");
const memeAuthor = document.querySelector(".meme_generator .meme_author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
