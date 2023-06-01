import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from './modal';

interface Team {
  name: string;
  image: string;
  captain: string;
  players: Player[];
}

interface Player {
  name: string;
  batting: string;
  bowling: string;
  image: string;
  credits: number;
  position:string;
}



@Component({
  selector: 'app-prediction-derails',
  templateUrl: './prediction-derails.component.html',
  styleUrls: ['./prediction-derails.component.css']
})

export class PredictionDerailsComponent implements OnInit {

  matchId: string = "";
  viewMode = 'tab1';
  details: Details;
  myMap: Map<string, any> = new Map();
  matchDetailsMap = new Map<string, Details>();


  constructor(private route: ActivatedRoute) {
    const matchIdParam = this.route.snapshot.queryParamMap.get('matchId');
    this.matchId = matchIdParam !== null ? matchIdParam : '';
    this.details = new Details();
    this.datasource();
    this.loadDetails(this.matchId);

  }
  ngOnInit() {

  }
  loadDetails(matchId: string) {
    const result = this.getValueForKey(matchId);
    if (result) {
      this.details = result;
      this.details.team1 = result.team1;
      this.details.team2 = result.team2;
      this.details.team1LastFive = result.team1LastFive;
      this.details.team2LastFive = result.team2LastFive;
      this.details.venuStats = result.venuStats;
      this.details.keyPlayers = result.keyPlayers;
      this.details.description = result.description;
      this.details.team1percentage = result.team1percentage;
      this.details.team2percentage = result.team2percentage;
      this.details.expertTeam=result.expertTeam;
    }

  }

  getValueForKey(key: string): Details | null {
    const value = this.matchDetailsMap.get(key);
    if (value) {
      return value;
    } else {
      return null;
    }
  }
   getFilteredPlayers(position: string): any[] {
    return this.sortedPlayers.filter(player => player.position === position);
  }
  datasource() {

    this.matchDetailsMap.set('match2', {
      team1: 'Australia',
      team2: 'New Zealand',
      team1LastFive: ['W', 'L', 'W', 'W', 'W'],
      team2LastFive: ['W', 'W', 'W', 'L', 'W'],
      venuStats: {
        stadium: 'Melbourne Cricket Ground',
        pitch: 'Green',
        goodFor: 'Bowling',
        weather: 'Cloudy',
        averageScore: '150',
      },
      captainOptions:['Steve Smith', 'Kane Williamson'],
      viceCaptainOptions:['Steve Smith', 'Kane Williamson tajiv'],
      keyPlayers: [
        {
          id: 1,
          playerName: 'Rohit',
          description: 'Top-order batsman and former captain of the Australian cricket team',
        },
        {
          id: 2,
          playerName: 'Kane Williamson',
          description: 'Top-order batsman and captain of the New Zealand cricket team',
        },
      ],
      description: 'This is a highly anticipated match between two cricketing rivals.',
      team1percentage: '55%',
      team2percentage: '45%',
      team1color: "yellow",
      team2color: "black",
      expertTeam:['https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg',
      'https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg']
    });

    this.matchDetailsMap.set('match3', {
      team1: 'India',
      team2: 'Pakistan',
      team1LastFive: ['W', 'L', 'W', 'W', 'W'],
      team2LastFive: ['W', 'W', 'W', 'L', 'W'],
      venuStats: {
        stadium: 'Chepok Cricket Ground',
        pitch: 'Green',
        goodFor: 'Batting',
        weather: 'Cloudy',
        averageScore: '150',
      },
      captainOptions:['Chandhru', 'Kane Williamson'],
      viceCaptainOptions:['Steve Smith', 'Chandhru'],
      keyPlayers: [
        {
          id: 1,
          playerName: 'Chandhru',
          description: 'Top-order batsman and former captain of the Australian cricket team',
        },
        {
          id: 2,
          playerName: 'Sreedher',
          description: 'Top-order batsman and captain of the New Zealand cricket team',
        },
      ],
      description: 'This is a highly anticipated match between two cricketing rivals.',
      team1percentage: '55%',
      team2percentage: '45%',
      team1color: "blue",
      team2color: "green",
      expertTeam:['','']
    });
  }
  

  teams:Team[] = [
    {
      name: 'Team A',
      image: 'https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg',
      captain: 'Player 1',
      players: [
        {
          name: 'Rohit',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg',
          credits: 10,
          position:'batsman'
        },
        {
          name: 'Rahul',
          batting: 'Left-hand bat',
          bowling: 'Left-arm orthodox',
          image: 'https://via.placeholder.com/10',
          credits: 9,
          position:'wicketkeeper'
        },
        {
          name: 'kohli',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/10',
          credits: 10,
          position:'batsman'
        },
        {
          name: 'jadeja',
          batting: 'Left-hand bat',
          bowling: 'Left-arm orthodox',
          image: 'https://via.placeholder.com/50',
          credits: 9,
          position:'allRounder'
        },
        {
          name: 'dhoni',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/50',
          credits: 10,
          position:'wicketkeeper'
        },
        {
          name: 'rayudu',
          batting: 'Left-hand bat',
          bowling: 'Left-arm orthodox',
          image: 'https://via.placeholder.com/50',
          credits: 9,
          position:'batsman'
        },
        {
          name: 'pandya',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/50',
          credits: 10,
          position:'allRounder'
        },
        {
          name: 'Bumbra',
          batting: 'Left-hand bat',
          bowling: 'Left-arm orthodox',
          image: 'https://via.placeholder.com/50',
          credits: 9,
          position:'bowler'
        },
        {
          name: 'B kumar',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/50',
          credits: 10,
          position:'bowler'
        },
        {
          name: 'pant',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/50',
          credits: 10,
          position:'wicketkeeper'
        },
        {
          name: 'M shami',
          batting: 'Right-hand bat',
          bowling: 'Right-arm medium',
          image: 'https://via.placeholder.com/50',
          credits: 10,
          position:'bowler'
        }
      ]
    },
    {
      name: 'Team B',
      image: 'https://via.placeholder.com/50',
      captain: 'Player 3',
      players: [
        {
          name: 'Player 3',
          batting: 'Right-hand bat',
          bowling: 'Right-arm offbreak',
          image: 'https://via.placeholder.com/10',
          credits: 10,
          position:'batsman'
        },
        {
          name: 'Player 4',
          batting: 'Right-hand bat',
          bowling: 'Right-arm fast-medium',
          image: 'https://via.placeholder.com/10',
          credits: 9,
          position:'allrounder'
        }
      ]
    }
  ];

  showModal = false;
  selectedTeam: Team | null = null;

  showTeamMembers(team : Team) {
    this.selectedTeam = team;
    this.selectedTeam.players=team.players;
    this.showModal = true;
  }

  get sortedPlayers() {
    if (!this.selectedTeam) return [];

    const keepers = this.selectedTeam.players.filter(p => p.position === 'wicketkeeper');
    const batsmen = this.selectedTeam.players.filter(p => p.position === 'batsman');
    const allrounders = this.selectedTeam.players.filter(p => p.position === 'allRounder');
    const bowlers = this.selectedTeam.players.filter(p => p.position === 'bowler');

    return [
      ...keepers,
      ...batsmen.slice(0, 4),
      ...allrounders.slice(0, 4),
      ...bowlers.slice(0, 4),
      ...batsmen.slice(4),
      ...allrounders.slice(4),
      ...bowlers.slice(4),
    ];
  }

  hideTeamMembers() {
    this.selectedTeam = null;
    this.showModal = false;
  }

}
