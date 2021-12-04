class Team {
    constructor(name) {
        this.name = name;
        this.players = [];

    }
    displayTeamName() {
        alert(`the ${this.name} has a member of `)
    }
}
class Menu {
    constructor() {
        this.team = [];

    }
    start() {
        let selection = this.showMainMenu();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createTeam();
                    break;
                case "2":
                    this.viewTeam();
                    break;
                case "3":
                    this.showTeams();
                    break;
                case "4":
                    this.addTeamMembers();
                    break;
                case "5":
                    this.deleteTeam();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("good bye");
    }

    showMainMenu() {
        return (prompt(`
          0) exit
          1) create team
          2) view team
          3) show all teams
          4) add team member
          5) delete team
      `))
    }

    createTeam() {
        let teamName = prompt("Enter a new team name");
        // this.team.push(new Team(teamName));
        this.team.push(teamName)
    }

    addTeamMembers() {
        let index = prompt("Enter team number");
        for (let i = 0; i < this.team.length; i++) {
            if (index == ++i) {
                let teamMembers = prompt("Enter Team Member");
            }
        }

    }

    showTeams() {
        let teams = "";
        for (let i = 0; i < this.team.length; i++) {
            teams += `${i + 1}) ${this.team[i]} \n`
        }
        alert(`Teams \n ${teams}`);
    }

    viewTeam() {
        let index = prompt("Enter the team name to find").toLocaleLowerCase();
        for (let i = 0; i < this.team.length; i++) {
            if (index === this.team[i]) {
                alert("found");
            } else {
                alert("not found");
            }
        }
    }

    deleteTeam() {
        let index = prompt("Enter the team name to find").toLocaleLowerCase();
        for (let i = 0; i < this.team.length; i++) {
            if (index === this.team[i]) {
                this.team.splice(i, 1)
            } else {
                alert("not found");
            }
        }
    }

}
let menu = new Menu();
menu.start();