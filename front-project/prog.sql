CREATE TABLE utilisateur (

    id_user SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE,
    mail VARCHAR(30),
    mdp VARCHAR(30)  
);