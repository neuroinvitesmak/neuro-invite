export type InviteTemplate = {
  id: string; title: string; category: string; description: string;
  price: number; theme: "rose" | "night" | "cream" | "blue";
  tag?: string; symbol: string;
};
export const templates: InviteTemplate[] = [
  { id:"bloom", title:"Цветение", category:"День рождения", description:"Нежная композиция с цветами и лёгкой анимацией", price:490, theme:"rose", tag:"Популярный", symbol:"✿" },
  { id:"midnight", title:"Вечер в сиянии", category:"Юбилей", description:"Элегантный тёмный дизайн с золотыми акцентами", price:990, theme:"night", tag:"Премиум", symbol:"✦" },
  { id:"minimal", title:"Тёплая история", category:"Семейный праздник", description:"Светлый минимализм и уютная типографика", price:490, theme:"cream", symbol:"❋" },
  { id:"blue", title:"Морская история", category:"Детский праздник", description:"Свежий голубой стиль для яркого события", price:990, theme:"blue", symbol:"〰" },
  { id:"gold", title:"Особенный день", category:"Свадьба", description:"Торжественный дизайн для самого важного дня", price:1990, theme:"cream", tag:"Новинка", symbol:"♢" },
  { id:"party", title:"Время праздновать", category:"День рождения", description:"Смелые детали и праздничное настроение", price:990, theme:"rose", symbol:"✧" }
];
