window.addEventListener('load', () => {
  const vApp = new Vue({
    el: '#app',
    data: {
      players: [],
      labels: {
        player: {
          name: 'Spelare'
        },
        first: {
          ones: 'Ettor',
          twos: 'Tvåor',
          threes: 'Treor',
          fours: 'Fyror',
          fives: 'Femmor',
          sixes: 'Sexor',
        },
        second: {
          pair: 'Par',
          twoPair: 'Två par',
          threePair: 'Tre par',
          threeOfAKind: 'Tretal',
          fourOfAKind: 'Fyrtal',
          fiveOfAKind: 'Femtal',
          smallStraight: 'Liten stege',
          largeStraight: 'Stor stege',
          fullStraight: 'Full stege',
          fullHouse: 'Kuk',
          House: 'Hus',
          Tower: 'Torn',
          chance: 'Chans',
          yatzy: 'MaxiYatzy!'
        }
      }
    },
    methods: {
      addPlayer(name) {
        const player = new Player(name);
        this.players.push(player.data);
      },
      removePlayer(id) {
        this.players.splice(id, 1);
      },
      playerTotal: function(id) {
        if (this.players[id]) {
          let total = objectSum(this.players[id].scores);
          total += this.playerBonus(id);
          return total;
        }
      },
      playerSum: function(id) {
        if (this.players[id]) {
          const scores = this.players[id].scores;
          const obj = {
            ones: scores.ones,
            twos: scores.twos,
            threes: scores.threes,
            fours: scores.fours,
            fives: scores.fives,
            sixes: scores.sixes,
          }
          const total = objectSum(obj)
          return total;
        }
      },
      playerBonus: function(id) {
        return this.playerSum(id) > 83 ? 100 : 0;
      }
    },
    created() {
      for (let i = 0; i < 2; i++) {
        this.addPlayer('');
      }
    },
    watch: {
      players: {
        handler: function(val) {
        },
        deep: true
      }
    }
  });
});

const objectSum = function(object) {
  let total = 0;
  Object.values(object).forEach(value => {
    const number = parseInt(value, 10);
    if (number) {
      total += number;
    }
  });

  return total;
}

class Player {
  constructor(name) {
    this.data = {
      name: name,
      scores: {
        ones: '',
        twos: '',
        threes: '',
        fours: '',
        fives: '',
        sixes: '',
        pair: '',
        twoPair: '',
        threePair: '',
        threeOfAKind: '',
        fourOfAKind: '',
        fiveOfAKind: '',
        fullHouse: '',
        House: '',
        Tower: '',
        smallStraight: '',
        largeStraight: '',
        fullStraight: '',
        chance: '',
        yatzy: ''

      }
      //bonus: 0,
      //sum: 0,
      //total: 0
    }
  }
}
