import Header from "@/components/Header";
import TemplateTile from "@/components/TemplateTile";
import { templates } from "@/lib/templates";
export default function TemplatesPage() {
 const categories = ["Все", ...Array.from(new Set(templates.map(t=>t.category)))];
 return <main><Header/><section className="mx-auto max-w-6xl px-5 pb-20 pt-8"><p className="text-xs font-bold uppercase tracking-[.2em] text-rose-500">Каталог</p><h1 className="serif mt-3 text-5xl">Выберите приглашение</h1><p className="mt-4 max-w-2xl text-stone-500">Каждый дизайн можно адаптировать под ваше событие: изменить текст, дату, место, добавить фото и музыку.</p>
  <div className="mt-9 flex flex-wrap gap-2">{categories.map((c,i)=><span key={c} className={`rounded-full px-4 py-2 text-sm ${i===0?"bg-stone-900 text-white":"border border-stone-200 bg-white text-stone-600"}`}>{c}</span>)}</div>
  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{templates.map(t=><TemplateTile key={t.id} item={t}/>)}</div>
 </section></main>;
}
