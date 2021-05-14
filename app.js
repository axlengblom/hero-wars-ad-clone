const gameWindow = document.getElementById("gameWindow");

const hero = document.createElement("div");

const enemyArr = [];

let gameLvl = 0;

hero.id = "hero";

class Enemy {
  constructor(level, id) {
    this.id = id;
    this.level = level;
  }
}

heroobj = { lvl: 5, clicked: false };

enemyobj = { lvl: 3, clicked: false };

gameWindow.appendChild(hero);

hero.innerHTML = heroobj.lvl;

hero.classList.add("hero");

hero.addEventListener("click", () => {
  heroobj.clicked = true;
  console.log(heroobj);
});

for (let i = 0; i < gameLvl + 5; i++) {
  let level = enemyArr.push(
    new Enemy(Math.floor(Math.random() * gameLvl) + 1, i)
  );
}
let generateEnemies = function () {
  for (let i = 0; i < enemyArr.length; i++) {
    let top = 490 - 100 * i;

    let newEnemy = document.createElement("div");
    newEnemy.classList.add("enemy");

    newEnemy.style.top += top + "px";
    newEnemy.innerHTML = enemyArr[i].level;
    gameWindow.appendChild(newEnemy);
    newEnemy.id = i;
    newEnemy.onclick = function () {
      console.log(enemyArr[this.id].level);
      enemyClick(this.id);
    };
  }
};

generateEnemies();

console.log(enemyArr);

let enemyClick = function (enemyid) {
  if (heroobj.clicked) {
    if (enemyArr[enemyid].level < heroobj.lvl) {
      console.log("hello");
      heroobj.lvl += enemyArr[enemyid].level;
      hero.innerHTML = heroobj.lvl;
      gameWindow.removeChild(document.getElementById(enemyid));
      gameLvl++;
      let enemyIndex = enemyArr.findIndex(({ id }) => id == enemyid);
      enemyArr.splice(enemyIndex, 1);
      heroobj.clicked = false;
    } else {
      gameWindow.insertAdjacentHTML("beforebegin", "<h1>Game Over</h1>");
    }
  } else {
    console.log("clickherofirst");
  }
};
