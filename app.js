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

let generateEnemies = function () {
  for (let i = 0; i < gameLvl + 1; i++) {
    if (i == 0) {
      enemyArr.push(new Enemy(Math.floor(heroobj.lvl / 2), i));
    } else if (i == 1) {
      enemyArr.push(new Enemy(Math.floor(enemyArr[i - 1].level * 3), i));
    } else {
      enemyArr.push(
        new Enemy(Math.floor(enemyArr[i - 1].level * Math.random() * 2), i)
      );
    }
  }

  for (let i = 0; i < enemyArr.length; i++) {
    let top = 490 - 100 * i;

    let newEnemy = document.createElement("div");
    newEnemy.classList.add("enemy");

    newEnemy.style.top += top + "px";
    newEnemy.innerHTML = enemyArr[i].level;
    gameWindow.appendChild(newEnemy);
    newEnemy.id = i;
    newEnemy.onclick = function () {
      console.log(this.id);
      let found = enemyArr.find(({ id }) => id == this.id);
      console.log(found);
      enemyClick(found);
    };
  }
};

generateEnemies();

console.log(enemyArr);

let enemyClick = function (enemy) {
  if (heroobj.clicked) {
    if (enemy.level < heroobj.lvl) {
      console.log("hello");
      heroobj.lvl += enemy.level;
      hero.innerHTML = heroobj.lvl;
      gameWindow.removeChild(document.getElementById(enemy.id));

      let enemyIndex = enemyArr.findIndex(({ id }) => id == enemy.id);
      enemyArr.splice(enemyIndex, 1);
      //   heroobj.clicked = false;
      console.log(gameLvl);
      if (enemyArr.length == 0) {
        if (gameLvl < 4) {
          gameLvl++;
        }

        generateEnemies();
      }
    } else {
      gameWindow.insertAdjacentHTML("beforebegin", "<h1>Game Over</h1>");
    }
  } else {
    console.log("clickherofirst");
  }
};

let enemyLevelGeneration = function () {};
