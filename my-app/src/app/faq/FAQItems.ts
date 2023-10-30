import { FAQCardProps } from "./FAQCard";

interface FAQCard {
  text: string;
  title: string;
}

const FAQItems: FAQCard[] = [
  {
    title: "1.Общая информация",
    text: "Добро пожаловать в наше сообщество целеустремлённых и трудолюбивых людей.Вы попали в единственное в своем роде комьюнити где нету рекламы, реферальных ссылок , скама, и прочих способов монетизации аудитории.У нас все держится на доверии, человечности и взаимоуважении, у нас нет цели заработать с вас.Если вы амбициозный человек, который хочет чего то достичь в своей жизни - у нас вы сможете найти себе единомышленников, и кто знает, может быть даже будущих партнёров по бизнес-проектам)",
  },
  {
    text: 'Metamorphix - сокращение от "metamorphosis" что переводиться как метаморфоза, преображение, рекомпоновка.Идея нашего сообщества в саморазвитии, видоизменении и стремлении к лучшему будущему, и мы будем рады найти единомышленников в этом.',
    title: "2.Что означает Metamorphix?",
  },
  {
    text: "Мы считаем что предлагать только комьюнити бесполезно, помимо поиска единомышленников вы также можете получить доступ к информации из закрытых ресурсов, на сервере публикуется контент на различные темы(Криптовалюты, програмирование, мануалы и тд.) \nМы можем помочь вам разобраться чуть ли не в любой сфере заработка в интернете, если конечно сами в ней варимся)",
    title: "3.Что есть кроме нетворкинга?",
  },
  {
    title: "4.Кем это все спонсируется?",
    text: "Сервер финансируется полностью из кармана администрации.Нам не жалко потратить пару сотен долларов на создание дружной семьи ,где каждый человек может попросить о помощи и ему не откажут, нам не жалко времени и сил на обучение и помощь людям.Мы верим в то что добро возвращается .",
  },
  {
    title: "5.Могу ли я позвать своих друзей?",
    text: "Да,можете, мы будем рады любым людям, если у них есть стремление к чему то большему в жизни - ждем с нетерпением.",
  },
  {
    title: "6.К кому можно обратиться в случае вопросов?",
    text: "Вы всегда можете написать на почту metamorphix1.0@gmail.com, либо же администраторам в телеграм(@Zentoren), вся более детальная информация находиться по ссылке ниже",
  },
];

export default FAQItems;
