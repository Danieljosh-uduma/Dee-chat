let arrowBack = document.getElementById('arrowback');
let chatBox = document.getElementById('chatbox');
let chatList = document.getElementById('chatlist');

arrowBack.onclick = function (){
    chatBox.style.display = 'none';
    chatList.style.display = 'block';
}