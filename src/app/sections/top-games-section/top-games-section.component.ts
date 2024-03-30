import { Component } from '@angular/core';
import { demoCardCandidate } from 'src/app/components/models/demo-card-model';

@Component({
  selector: 'app-top-games-section',
  templateUrl: './top-games-section.component.html',
  styleUrls: ['./top-games-section.component.scss']
})
export class TopGamesSectionComponent {
  bannerWords: string[] = ['Gaming spaning','Action packed', 'mind bending', 'collection of games']

  cardData:demoCardCandidate[] =
[
  {
    id:'CameronWilliamson',
    cardButton: 'Live Demo',
    featureImageSource: 'card1.png',
    avatarImageSource: 'card1.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Cameron Williamson',
    nameOfCompany: 'Gillette',
  },
  {
    id:'DianneRussell',
    cardButton: 'Live Demo',
    featureImageSource: 'card2.png',
    avatarImageSource: 'card2.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Dianne Russell',
    nameOfCompany: 'Louis Vuitton',
  },
  {
    id:'JaneCooper',
    cardButton: 'Live Demo',
    featureImageSource: 'card3.png',
    avatarImageSource: 'card3.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Jane Cooper',
    nameOfCompany: 'MasterCard',
  },
  {
    id:'CodyFisher',
    cardButton: 'Live Demo',
    featureImageSource: 'card4.png',
    avatarImageSource: 'card4.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Cody Fisher',
    nameOfCompany: 'The Walt Disney Company',
  },
  {
    id:'WadeWarren',
    cardButton: 'Live Demo',
    featureImageSource: 'card5.png',
    avatarImageSource: 'card5.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Wade Warren',
    nameOfCompany: 'Gillette',
  },
  {
    id:'RobertFox',
    cardButton: 'Live Demo',
    featureImageSource: 'card6.png',
    avatarImageSource: 'card6.svg',
    themeName: 'core philosophies',
    nameOfPerson: 'Robert Fox',
    nameOfCompany: 'LOréal',
  },






]


}
