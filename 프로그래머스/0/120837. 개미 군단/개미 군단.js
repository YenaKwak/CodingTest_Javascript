function solution(hp) {
    // 장군개미로 먼저 체력을 소모
    let generalAnts = Math.floor(hp / 5);  // 장군개미의 수
    hp = hp % 5;  // 남은 체력

    // 병정개미로 남은 체력을 소모
    let soldierAnts = Math.floor(hp / 3);  // 병정개미의 수
    hp = hp % 3;  // 남은 체력

    // 남은 체력은 일개미로 소모
    let workerAnts = hp;  // 일개미의 수는 남은 체력과 동일

    // 총 필요한 개미 수는 세 종류의 개미 수의 합
    return generalAnts + soldierAnts + workerAnts;
}
