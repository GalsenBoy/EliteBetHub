interface Team {
    id: number;
    name: string;
    logo: string;
}

interface Goal {
    home: number;
    away: number;
}

interface League {
    id: number;
    name: string;
    logo: string;
}

export interface Item {
    fixture: {
        id: number;
    };
    teams: {
        home: Team;
        away: Team;
    };
    goals: Goal;
    league: League;
}