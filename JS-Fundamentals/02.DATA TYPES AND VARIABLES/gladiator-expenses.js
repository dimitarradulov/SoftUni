unction solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    lostFights = Number(lostFights);
    helmetPrice = Number(helmetPrice);
    swordPrice = Number(swordPrice);
    shieldPrice = Number(shieldPrice);
    armorPrice = Number(armorPrice);

    let helmetCounter = 2;
    let swordCounter = 3;
    let shieldCounter = 2;

    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armourBroken = 0;
    
    for (let i = 2; i <= lostFights; i++) {
        if (helmetCounter === i && swordCounter === i) {
            shieldBroken += 1;
            if (shieldBroken === shieldCounter) {
                armourBroken += 1;
                shieldCounter += 2;
            }
        }
        
        if (helmetCounter === i) {
            helmetBroken += 1;
            helmetCounter += 2;
        }

        if (swordCounter === i) {
            swordBroken += 1;
            swordCounter += 3;
        }
    }
    
    let finalPrice = (helmetBroken * helmetPrice) + (swordBroken * swordPrice) + (shieldBroken * shieldPrice) + (armourBroken * armorPrice);
    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}