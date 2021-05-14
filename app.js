const gameWindow = document.getElementById("gameWindow");

const hero = document.createElement("div");

const enemy = document.createElement("div");

enemy.id = "enemy";

hero.id = "hero";

heroobj = { lvl: 5, clicked: false };

enemyobj = { lvl: 3, clicked: false };

gameWindow.appendChild(hero);
gameWindow.appendChild(enemy);

hero.style.height = "50px";
hero.style.width = "50px";
hero.style.backgroundColor = "black";
hero.style.position = "relative";
hero.style.top = "490px";
hero.style.left = "50px";

enemy.style.height = "50px";
enemy.style.width = "50px";
enemy.style.backgroundColor = "red";
enemy.style.position = "relative";
enemy.style.top = "440px";
enemy.style.left = "690px";

hero.addEventListener("click", () => {
  heroobj.clicked = true;
  console.log(heroobj);
});

enemy.addEventListener("click", () => {
  console.log("enemyclicked");
  if (heroobj.clicked) {
    if (heroobj.lvl > enemyobj.lvl) {
      heroobj.lvl += enemyobj.lvl;
      console.log(heroobj);
      gameWindow.removeChild(enemy);
    } else {
      gameWindow.insertAdjacentHTML("beforebegin", "<h1>Game Over</h1>");
    }
  } else {
    console.log("clickherofirst");
  }
});
