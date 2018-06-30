    var autheEmailPassButton  =  document.getElementById("autheEmailPassButton");
    var authFacebookButton    =  document.getElementById("authFacebookButton");
    var authGitHubButton      =  document.getElementById("authGitHubButton");
    var authTwitterButton     =  document.getElementById("authTwitterButton");
    var authGoogleButton      =  document.getElementById("authGoogleButton");
    var authAnonymouslyButton =  document.getElementById("authAnonymouslyButton");
    var createUserButton      =  document.getElementById("createUserButton");
    var logOutButton          =  document.getElementById("logOutButton");


    var emailInput     =  document.getElementById("emailInput");
    var passwordInput  =  document.getElementById("passwordInput");


    var displayName    =  document.getElementById("displayName");

    createUserButton.addEventListener('click', function(){
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(function(){
                displayName.innerHTML = 'Bem vindo ' + emailInput.value;
                alert('Bem vindo ' + emailInput.value);
            })
            .catch(function(error){
                console.error(error.code);
                console.error(error.message);
                alert("Falha ao cadastrar, verifique o erro no console.");
            });
    });

    autheEmailPassButton.addEventListener('click', function(){
        firebase
            .auth()
            .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(function(result){
                console.log(result);
                displayName.innerHTML = 'Bem vindo ' + emailInput.value;
                alert('Bem vindo ' + emailInput.value);
            })
            .catch(function(error){
                console.error(error.code);
                console.error(error.message);
                alert("Falha ao realizar login, verifique o erro no console.");
            });
    });

    logOutButton.addEventListener('click', function(){
        firebase
        .auth()
        .signOut()
        .then(function(){
            displayName.innerHTML = "Você não está autenticado";
            alert("Você se deslogou");
        }, function (error) {
            console.error(error);
        });
    });

    authAnonymouslyButton.addEventListener('click', function(){
        firebase
        .auth()
        .signInAnonymously()
        .then(function(result){
            console.log(result);
            displayName.innerHTML = "Bem vindo, desconhecido";
            alert("Autenticado Anonimamente");
        })
        .catch(function(error){
            console.error(error.code);
            console.error(error.message);
            alert("Falha ao autenticar, verifique o erro no console.");
        })
    })

    authGitHubButton.addEventListener('click', function(){
        var provider = new firebase.auth.GithubAuthProvider();
        signIn(provider);
    })

    authFacebookButton.addEventListener('click', function(){
        var provider = new firebase.auth.FacebookAuthProvider();
        signIn(provider);
    })

    authTwitterButton.addEventListener('click', function(){
        var provider = new firebase.auth.TwitterAuthProvider();
        signIn(provider);
    })

    authGoogleButton.addEventListener('click', function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        signIn(provider);
    })

    function signIn(provider){
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerHTML = "Bem vindo " + result.user.displayName;
        }).catch(function(error){
            console.log(error);
            alert("Falha na autenticação");
        })
    }










