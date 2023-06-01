export class Details {
    team1: string="";
    team2: string="";
    team1LastFive: string[]=[];
    team2LastFive: string[]=[];
    venuStats: VenuStats;
    captainOptions: string[]=[];
    viceCaptainOptions: string[]=[];
    keyPlayers: {
        id:Number;
        playerName: string;
        description: string;
    }[] = [];
    description: string="";
    team1percentage: string="";
    team2percentage: string="";
    team1color: string="";
    team2color: string="";
    expertTeam:string[]=[];

    constructor() {
      this.venuStats = {
        stadium: "",
        pitch: "",
        goodFor: "",
        weather: "",
        averageScore: ""
      };
    }
  }
  type VenuStats = {
    stadium: string;
    pitch: string;
    goodFor: string;
    weather: string;
    averageScore: string;
  };
  
  