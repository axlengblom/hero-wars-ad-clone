const gameWindow = document.getElementById("gameWindow");

const hero = document.createElement("div");

const enemy = document.createElement("div");

enemy.id = "enemy";

hero.id = "hero";

heroobj = { lvl: 5, clicked: false };

enemyobj = { lvl: 3, clicked: false };

gameWindow.appendChild(hero);
gameWindow.appendChild(enemy);

hero.innerHTML = heroobj.lvl;
enemy.innerHTML = enemyobj.lvl;

hero.style.height = "50px";
hero.style.width = "50px";
hero.style.backgroundColor = "black";
hero.style.color = "white";
hero.style.position = "relative";
hero.style.top = "490px";
hero.style.left = "50px";
hero.style.display = "flex";
hero.style.justifyContent = "center";
hero.style.alignItems = "center";

enemy.style.height = "50px";
enemy.style.width = "50px";
enemy.style.backgroundColor = "red";
enemy.style.position = "relative";
enemy.style.color = "white";
enemy.style.top = "440px";
enemy.style.left = "690px";
enemy.style.display = "flex";
enemy.style.justifyContent = "center";
enemy.style.alignItems = "center";

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

      hero.innerHTML = heroobj.lvl;
      gameWindow.removeChild(enemy);
    } else {
      gameWindow.insertAdjacentHTML("beforebegin", "<h1>Game Over</h1>");
    }
  } else {
    console.log("clickherofirst");
  }
});
