define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.ofertas = [{
        id: 1,
        nome: 'Oferta 1',
        cidade: 'Cidade 1',
        estado: 'PR',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        lat: 51.090209,
        lng: 6.585863,
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        nome: 'Oferta 2',
        cidade: 'Cidade 2',
        estado: 'SP',
        rua: 'Rua Teste',
        number: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.163893,
        lng: 10.986114,
        tipo: 'produto',
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        nome: 'Oferta 3',
        cidade: 'Cidade 3',
        estado: 'SP',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.114004,
        lng: 10.933228,
        wheelchair: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        nome: 'Oferta 4',
        cidade: 'Cidade 4',
        estado: 'PR',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        nome: 'Oferta 5',
        cidade: 'Cidade 6',
        estado: 'SP',
        rua: 'Frühlingsstraße',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 10:00 AM',
          'Sabado: 9:30 AM'
        ],
        lat: 48.302842,
        lng: 11.352900,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 6,
        nome: 'Science Event',
        cidade: 'Hachelbich',
        estado: 'Kyffhäuserland',
        rua: 'Oberdorf',
        numero: '10',
        cep: '99707',
        dates: [
          'Segunda: 10:00 AM',
          'Sabado: 9:30 AM'
        ],
        lat: 51.344143,
        lng: 10.966972,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 7,
        nome: 'Science Event',
        cidade: 'Berka',
        estado: 'Sondershausen',
        rua: 'Wittchental',
        numero: '10',
        cep: '99706',
        dates: [
          'Segunda: 10:00 AM',
          'Sabado: 9:30 AM'
        ],
        lat: 50.941998,
        lng: 10.073971,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 8,
        nome: 'Science Event',
        cidade: 'Roßla',
        estado: 'Sangerhausen',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.463053,
        lng: 11.069677,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 9,
        nome: 'Science Event',
        cidade: 'Kelbra',
        estado: 'Sangerhausen',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.434340,
        lng: 11.101727,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        nome: 'Science Event',
        cidade: 'Tilleda',
        estado: 'Sangerhausen',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.418927,
        lng: 11.143613,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 11,
        nome: 'Sport Event',
        cidade: 'Neuss',
        estado: 'PR',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.204197,
        lng: 6.687951,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 12,
        nome: 'Sport Event',
        cidade: 'Krefeld',
        estado: 'PR',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.333347,
        lng: 6.584587,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 13,
        nome: 'Sport Event',
        cidade: 'Kempen',
        estado: 'PR',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.361224,
        lng: 6.428719,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 14,
        nome: 'Sport Event',
        cidade: 'Mühlheim an der Ruhr',
        estado: 'Duisburg',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 51.421209,
        lng: 6.882591,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 15,
        nome: 'Sport Event',
        cidade: 'Kreuzberg',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.497492,
        lng: 13.395252,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 16,
        nome: 'Sport Event',
        cidade: 'Charlottenburg',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.515881,
        lng: 13.295689,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 17,
        nome: 'Sport Event',
        cidade: 'Schöneberg',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.480977,
        lng: 13.369846,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 18,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 19,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 20,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 21,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 22,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 23,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 24,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 25,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 26,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 27,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 28,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 29,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 30,
        nome: 'Sport Event',
        cidade: 'Cidade 31',
        estado: 'Estado 94',
        rua: 'Rua Teste',
        numero: '17',
        cep: '41515',
        dates: [
          'Segunda: 9:00 AM',
          'Sabado: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }];

      this.pages = [
        {
          alias: 'profile',
          content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
          title: 'Perfil',
          icon: 'ion-person'
        },
        {
        alias: 'impress',
        content: '<h1>HTML Ipsum Presents</h1>' +
        '<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Sobre',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Ajuda',
        icon: 'ion-paper-airplane'
      }];

      this.users = [{
        tipo: "donatario",
        nome: "ONG 1",
        username: "ong",
        contact: {
          tel: '1234/56789',
          email: 'donatario@whoneedstuff.com',
          website: 'http://example.com'
        }
      },
        {
          tipo: "doador",
          nome: "Joao da silva",
          username: "doador",
          contact: {
            tel: '1234/56789',
            email: 'doador@whoneedstuff.com',
            website: 'http://example.com'
          }
        }
       ]

    }
  ]);
});
