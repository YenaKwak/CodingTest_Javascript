// Cut the pizza into six pieces. When n, the number of people who will share the pizza, is given as a parameter, complete the solution function to return the minimum number of slices that should be ordered if n people must all eat the same number of pizza slices without leaving any pizza they ordered.

const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}