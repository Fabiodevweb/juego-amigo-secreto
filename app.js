// Array para almacenar los nombres
let nameFriends = [];
let friend = document.getElementById('amigo');
let listFriend = document.getElementById('listaAmigos');

// Agrega un amigo a la lista
function agregarAmigo() {
    if (friend.value != '') {
        nameFriends.push(friend.value);
        friend.value = '';
        console.log(nameFriends);
        let newFriend = document.createElement('li');
        newFriend.textContent = nameFriends[nameFriends.length - 1];
        listFriend.appendChild(newFriend);
    } else {
        alert('Ingresa un Nombre Valido');
    }
}

// Sortea un amigo secreto
function sortearAmigo() {
    if (nameFriends.length != 0) {
        let numberSort = Math.floor(Math.random() * nameFriends.length);
        listFriend.innerHTML = "";
        let friendSecret = document.getElementById('resultado');
        let nameSecret = document.createElement('li');
        nameSecret.textContent = `Tu amigo secreto es ${nameFriends[numberSort]}`;
        console.log(nameSecret);
        friendSecret.appendChild(nameSecret);
        friend.value = '';
        nameFriends = [];
    } else {
        alert('Ingresa una lista de Amigos');
    }
}
