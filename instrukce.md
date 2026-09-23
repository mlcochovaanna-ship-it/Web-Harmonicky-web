# Instrukce pro tvorbu webu harmonickyweb.cz
(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
Vytvoř samostatný soubor style.css, kam budeš shromažďovat všechny CSS vlastnosti
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article a další (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou, minimální velikost 17px
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku

**Layout**
Šířku celého webu dej na 85% obrazovky
Jasné oddělení sekcí a obsahových celků
Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Funční hamburger menu pro šířku obrazovky takovou, kdy se už zalamují nebo těsnají položky menu
Dej si záležet na patičce webu, ideálně tmavší akcent
U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404" dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie (používej font awesome, nebo uvedené ikony, ne emotikony)
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí
Pro text #333333
Brand barvy (HEX):
   - primární: [#f0ede8]
   - sekundární: [#fde9e3]
   - tlačítka: [#015c63] - pouze zvýraznění
   - pozadí: [#f0ede8 nebo #ffffff]
   - text: [#333333]

**Fonty**
Font textu: Montserrat
Font nadpisů: EB Garamond

**Struktura**
Jednostránkový web
URL - harmonickyweb.cz
Favicon negeneruj, použij Obrazky/logo-male.png
Položky menu: - O mně - Spolupráce - Ceník - Portfolio - Reference - Kontakt
Do hlavičky vlevo nahoře přidej logo Obrazky/logo-velke.png

**Další prvky na webu**
V sekci Kontakt bude kontaktní formulář. Doptej se, jaký tam chci udělat. Bude obsahovat Jméno a příjmení, E-mailovou adresu, telefon, zprávu.

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg.   Design laď do velmi jemných barev, které se hodí k tématu. Na zbytku webu požívej moderní trendy webdesignu: jemný barevný grafient, glass efekt a jemné interaktivní prvky.

**Moderní design**
Layout: používej souměrný Bento grid
Barvy: Jemné barevné gradienty, plynulé přechody
Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
Grafické prvky: Zařaď jemné grafické prvky
Glass efekt: Skleněný efekt v pozadí karet (glassmorphism)
Animace: Mikro interakce na hover, jemné scroll animace

**Obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce
Obrazky/ – pro celý web (hero sekce atd.)
Odkazy na konkrétní obrázky najdeš v textu níže.

**Texty**
Na webu použij tyto texty pro jednotlivé sekce. Drž se jich doslova a nic neměň ani nepřidávej.

---

## SEKCE: NAVIGACE (HLAVNÍ MENU)

[Položky menu]
- O mně
- Spolupráce
- Ceník
- Portfolio
- Reference
- Kontakt

---

## SEKCE: HERO (ÚVODNÍ)

Obrázek: Obrazky/harmonicky-web-0.jpg

[H1 (stylováno menší — verzálky)]
Anna Mlčochová | Webdesignérka pro Olomouc a okolí

[H2 (stylováno větší — vizuálně dominantní)]
Vytvořím vám web, který mluví za vás

[Text]
Webové stránky pro vaše podnikání, projekty a nápady s vaším autentickým otiskem.

[CTA tlačítka (2x)]
Prohlédnout portfolio
Nabídka na míru

[Popis pod fotografií]
Ukažte svou jedinečnost světu

---

## SEKCE: JAKÝ MŮŽE BÝT VÁŠ WEB

[Nadpis nad sekcí (dekorativní, verzálky)]
Jaký může být váš web

[H2]
Chcete web, který skutečně VYSTIHNE vás i vaše podnikání a PŘITÁHNE ty správné klienty?

[Bullet body (3x ikona + text)]
• Váš web může být KRÁSNÝ i PŘEHLEDNÝ. Vyladěný a zároveň dokonale funkční.
• Může nést vaši ENERGII i HODNOTY a přitom jasně říkat, co a komu nabízíte.
Takové weby tvořím. AUTENTICKÉ, SROZUMITELNÉ a PŘITAŽLIVÉ. Weby, které mluví za vás.

Ikony: Obrazky/ikona-list.png

---

## SEKCE: O MNĚ

Obrázek: Obrazky/harmonicky-web-1.jpg

[Nadpis nad sekcí (dekorativní)]
Komu svěřujete svůj web

[H2]
Mám dar vnímat obojí, STRUKTURU i KRÁSU, a přetvořit je ve funkční celek

[Bullet body (6x ikona + text)]
• Ahoj, jsem Anička a pomáhám ukázat světu, kdo opravdu jste a v čem jste dobří.
• Weby mě baví. Jsou pro mě prostorem, kde se potkává krása s funkčností.
• Mám ráda řád, strukturu a technickou čistotu. Dávají webu pevný základ.
• Zároveň vnímám estetiku, jemnost i energii, kterou jde cítit mezi řádky.
• Tvořím intuitivně, s citem pro všechno, co je pro vás důležité.
Miluju, když vše ladí, vizuálně, prakticky i lidsky.

Ikony: Obrazky/logo-male.png

---

## SEKCE: PŘÍBĚH (rozevírací/accordion prvky)

[H2 (odkaz / nadpis nad accordionem)]
Přečtěte si můj PŘÍBĚH

[Accordion položka 1 — nadpis (H3)]
1. Proč si mě weby přitáhly?

[Accordion položka 1 — text]
Protože jsou dokonalým spojením dvou světů. Technického a uměleckého.
Už ve škole jsem milovala jak matematiku, tak výtvarku. A když do toho později přišla informatika, bylo jasno.
Tehdy jsem si zvolila matematiku. Ale weby a jejich kouzlo mě stále přitahovaly.
Stačilo pár řádků v HTML a najednou se z prázdné obrazovky zrodila živá, krásná stránka. Tehdy mi to připadalo jako opravdový zázrak! 😄

[Accordion položka 2 — nadpis (H3)]
2. Proč tvořím Harmonické weby jinak?

[Accordion položka 2 — text]
Teprve časem jsem pochopila, že moje největší síla je právě v propojení těchto zdánlivě protichůdných oblastí.
Moji klienti oceňují, že jim nejen vytvořím funkční a spolehlivý web, ale také zachytím jejich jedinečnou energii a hodnoty.
A tak dnes tvořím weby z mé největší vášně, z harmonie mezi technickou a estetickou stránkou.
Přidanou hodnotou Harmonického webu je, že jasně a přirozeně promlouvá k vašim ideálním klientům.

[Accordion položka 3 — nadpis (H3)]
3. Jak jsem se stala webařkou?

[Accordion položka 3 — text]
Na doporučení jsem vyzkoušela kurz Webařce pod rukou od Magdalény Bouškové a naprosto mě oslnil.
Magda má skvěle vypracovaný systém, jak nejen webařit, ale i učit tvorbu webů.
Má kolem sebe krásnou komunitu inspirativních lidí, kterým umožňuje se neustále rozvíjet. S radostí je propojuje a dává jim prostor, kde každý může naplno projevit svůj talent.
Z jejích zkušeností a inspirace dnes čerpám i při tvorbě svých webů. Díky Magdi!

[Accordion položka 4 — nadpis (H3)]
4. Co o mně ještě nevíte?

[Accordion položka 4 — text (seznam faktů)]
• Pro inspiraci si chodím do přírody. Tam se dokážu uvolnit a relaxovat.
• Od malička miluju koně. Jezdím od šesté třídy a doteď mě to nepustilo. Láska na celý život.
• Mám blízko ke zvířatům. Chovala jsem psy, teď máme kočku… se zvířaty si rozumím.
• Baví mě technika i čísla. Vystudovala jsem optiku a optoelektroniku se zaměřením na lasery.
• Miluju klid a ticho. Když se propojím sama se sebou, přicházejí ty nejlepší nápady.
• Mám ráda pořádek a systém. Ale zároveň nechávám prostor pro intuici.
• Miluju smysluplné rozhovory. O životních cílech, důležitých otázkách a taky o duši.
• Baví mě osobní rozvoj. Ráda se vzdělávám, učím nové věci a posouvám se dál.
• Miluju knihy. Hlavně ty, které inspirují a pomáhají mi vnitřně růst (vlastně i navenek).
Když tvořím. Otevírám prostor, kde vynikne to nejlepší z vás a vašich projektů.

Stylování Accordion položek - jednoduchá šipka dolů pro otevření, jednoduchá šipka nahoru pro zavření položky.

---

## SEKCE: SPOLUPRÁCE (průběh)

Obrázek na pozadí sekce: Obrazky/harmonicky-web-2.jpg

[Nadpis nad sekcí (dekorativní)]
Co to bude obnášet

[H2]
Zajímá vás, JAK taková SPOLUPRÁCE probíhá?

[Krok 1 — H3]
1. Společné naladění

[Krok 1 — text]
Spojíme se a řeknete mi, co máte na srdci. Společně navrhneme řešení a vymyslíme, jak by mohl váš web vypadat. Poradím vám, jaké podklady budete potřebovat a jak je připravit a celým procesem vás srozumitelně provedu.

[Krok 2 — H3]
2. Cenová nabídka

[Krok 2 — text]
Na základě rozsahu a velikosti webu připravím individuální cenovou nabídku. Po jejím odsouhlasení mi pošlete zálohu (1/2 z dohodnuté částky). Jakmile budete mít podklady připravené (nebo aspoň část), můžeme začít.

[Krok 3 — H3]
3. Tvorba webu

[Krok 3 — text]
Od chvíle, kdy mi dodáte vše potřebné, web vzniká přibližně 1 měsíc. Po celou dobu budeme v kontaktu. Grafickou podobu s vámi budu průběžně konzultovat a dolaďovat detaily. Po dokončení a odsouhlasení nás čeká finální vyúčtování.

[Shrnutí pod kroky]
A to je teprve začátek. Zůstávám po vašem boku i nadále. Postarám se o spolehlivý chod webu, pomůžu vám s úpravami a budu tu pro vás, když váš projekt poroste.
Napište mi a domluvíme si krátké setkání. Vše vám srozumitelně vysvětlím.

[CTA tlačítko]
Mám zájem o spolupráci

---

## SEKCE: CENÍK

[Nadpis nad sekcí (dekorativní)]
Kolik web stojí

[H2]
Vyberte si ze tří variant podle ROZSAHU webu

[Varianta 1 — H3 (název balíčku)]
Autentický web

[Varianta 1 — subheading (podnázev)]
Malý web / webová vizitka

Ikona: Obrazky/web-1.png

[Varianta 1 — cena (H3)]
od 10 000 Kč

[Varianta 1 — popis]
Jednoduchý a přehledný web, který vystihne podstatu vašeho podnikání.
Může mít jednu stránku, nebo až čtyři podstránky, např. úvod, služby, o mně a kontakt.

[Varianta 1 — Pro koho je? (H4)] Accordion
Pro koho je?
Autentický web je ideální start pro začínající podnikatele, kteří chtějí ukázat, co dělají, a mít svůj prostor na internetu.
Bez složitostí, s důrazem na čistotu, přehlednost a autenticitu.

[Varianta 2 — H3 (název balíčku)]
Magnetický web

[Varianta 2 — subheading (podnázev)]
Střední web s více stránkami

Ikona: Obrazky/web-2.png

[Varianta 2 — cena (H3)]
od 20 000 Kč

[Varianta 2 — popis]
Střední web, který nabízí prostor pro širší představení vašeho podnikání.
Může zahrnovat blog, portfolio služeb nebo produktů, případně i jazykovou verzi.

[Varianta 2 — Pro koho je? (H4)] Accordion
Pro koho je?
Magnetický web je ideální pro ty, kteří chtějí svou práci představit do větší hloubky a přitom věcně a jasně.
S důrazem na estetiku, strukturu a celkovou přitažlivost webu, která osloví vaše ideální klienty.

[Varianta 3 — H3 (název balíčku)]
Exkluzivní web

[Varianta 3 — subheading (podnázev)]
Velký a rozsáhlý web

Ikona: Obrazky/web-3.png

[Varianta 3 — cena (H3)]
od 30 000 Kč

[Varianta 3 — popis]
Web s více než 10 stránkami pro komplexní prezentaci vašeho podnikání.
Často zahrnuje také napojení na e-mailing, rezervační či fakturační systém.

[Varianta 3 — Pro koho je? (H4)] Accordion
Pro koho je?
Exkluzivní web je pro ty, kteří chtějí mít profesionální online zázemí, kde se propojuje design, funkčnost a technické možnosti.
S důrazem na jedinečnost, luxus a podporu růstu vašeho podnikání.

[Text pod ceníkem]
Nejste si jistí výběrem? Ráda vám sestavím nabídku přesně na míru.

[CTA tlačítko]
Chci nabídku na míru

---

## SEKCE: CO JEŠTĚ POTŘEBUJETE VĚDĚT (rozevírací/accordion prvky)

[H2]
Co ještě potřebujete VĚDĚT?

[Accordion: Co je součástí webu? — nadpis (H4)]
Co je součástí webu?

[Accordion: Co je součástí webu? — text]
• Úvodní schůzka: Probereme vaše podnikání, hlavní cíle a záměr webu.
• Zajištění domény a hostingu: Pomůžu vám s objednáním domény a hostingu tak, aby byly ve vašem vlastnictví. (Pokud je ještě nemáte.)
• Obsah a struktura webu: Poradím vám s obsahem i s tím, jak jej přehledně uspořádat. Pomůžu vám také navrhnout vizuální styl tak, aby ladil s vaší osobní energií i podnikáním.
• Responzivní provedení: Web se bude správně zobrazovat na počítači, tabletu i mobilu. Dávám důraz na čitelnost a příjemné uživatelské prostředí.
• Rychlost webu: Optimalizuji načítání webu tak, aby běžel plynule a bez zbytečných prodlev.
• SEO základy: Zajistím základní nastavení webu tak, aby byl dobře čitelný pro vyhledávače (meta popisky, nadpisy, klíčová slova, struktura).
• Zabezpečení webu: Zajistím SSL certifikát a základní bezpečnostní opatření, aby byl váš web chráněný.
• Legislativa: Připravím cookie lištu, souhlasy ve formulářích a základní podklady, aby byl web právně v pořádku.
• Propojení se světem: Propojím web se sociálními sítěmi a nastavím náhledový obrázek pro sdílení na Facebooku.
• Podpora pro texty: Pomůžu vám s texty a udělám základní korekturu, aby web působil čistě a bez chyb.
• DIVI šablona: Pokud se dohodneme na DIVI — máte v ceně doživotní licenci DIVI, díky které budete mít možnost web i později upravovat nebo rozšiřovat.

[Accordion: Co není v ceně webu? — nadpis (H4)]
Co není v ceně webu?

[Accordion: Co není v ceně webu? — text]
• Webhosting a doména: platíte přímo poskytovateli. Spolupracuji s webkitty.cz. Pomůžu vám s jejich zajištěním, faktura přijde na vaše údaje.
• Fotografie a grafické podklady: pokud nemáte vlastní, poradím vám s výběrem vhodných zdrojů nebo doporučím fotografa.
• Editace a správa webu po spuštění: dodatečné úpravy, doplnění obsahu i pravidelná údržba. Cena je 700 Kč/h, účtováno po čtvrthodinách.
• Mioweb šablona: licence šablony se platí samostatně přímo poskytovateli.

[Accordion: Co lze domluvit navíc? — nadpis (H4)]
Co lze domluvit navíc?

[Accordion: Co lze domluvit navíc? — text]
• Zaškolení do administrace: na vyžádání. Cena je 1500 Kč jednorázově.
• Jazykové verze webu: individuálně nacením podle rozsahu.
• Blog: ideální pro ty, kdo chtějí svým klientům pravidelně přinášet nový obsah.
• Pokročilé funkce na míru: členské sekce nebo rezervační systémy.

[Accordion: Pro koho nejčastěji tvořím weby? — nadpis (H4)]
Pro koho nejčastěji tvořím weby?

[Accordion: Pro koho nejčastěji tvořím weby? — text]
Tvořím weby pro podnikatele, kteří mají co nabídnout a chtějí být vidět. Nejčastěji jsou to:
• maséři, kosmetičky, kadeřnice, fyzioterapeuti a další profese péče o tělo
• koučové, terapeuti a průvodci osobním rozvojem
• fotografové, ilustrátoři a kreativní tvůrci
• řemeslníci a handmade tvůrci
• astrologové a průvodci spirituálním rozvojem
• místní podnikatelé, kavárny, restaurace a provozovny
• majitelé ubytování, chalup a rekreačních objektů
• organizátoři workshopů, komunitních projektů a akcí
• chovatelé, veterináři, útulky a profese péče o zvířata
• lékaři, právníci, finanční poradci a odborné profese
• autoškoly, motoškoly a autoservisy
Pokud vaši profesi ve výčtu nevidíte, nevadí. Ozvěte se mi, ráda se na váš projekt podívám.

[Accordion: S jakými nástroji pracuji? — nadpis (H4)]
S jakými nástroji pracuji?

[Accordion: S jakými nástroji pracuji? — text]
Weby tvořím ve Wordpress šablonách DIVI a Mioweb nebo pomocí Vibe Codingu. Každé řešení má své výhody a společně vybereme to pravé pro vás.

[Accordion: Jak je to s pravidelnou údržbou webu? — nadpis (H4)]
Jak je to s pravidelnou údržbou webu?

[Accordion: Jak je to s pravidelnou údržbou webu? — text]
Pravidelná údržba zajistí, že váš web poběží spolehlivě a bez chyb. Zahrnuje zálohování, aktualizace a kontrolu funkčnosti. Doporučuji ji provádět minimálně čtyřikrát ročně. Nemusíte na nic myslet, pohlídám to za vás. Cena jedné údržby je 500 Kč.

---

## SEKCE: PORTFOLIO

Ke každé položce portfolia vytvoř mockupy daného webu na notebooku, tabletu a telefonu jako kompletní moderní ukázku - odkazy přikládám. Pokud nemůžeš čerpat z odkazů, napiš mi a udělám ti printscreeny.

[Nadpis nad sekcí (dekorativní)]
Jaké weby už vznikly

[H2]
Mrkněte na moje PORTFOLIO

[Položka portfolia 1 — H4]
Kepner-Tregoe

[Položka portfolia 1 — popis]
Web pro lektora metodiky Kepner-Tregoe a jeho nabídku seminářů.
kepner-tregoe.cz

[Položka portfolia 2 — H4]
Rudolf Guzik

[Položka portfolia 2 — popis]
Web pro kouče a mentora osobního a profesního rozvoje.
rudolfguzik.cz

[Položka portfolia 3 — H4]
Alena Hanušová

[Položka portfolia 3 — popis]
Web pro byznys mentorku propojující podnikání a astrologii.
alenahanusova.cz

[CTA odkaz]
Celé portfolio tady - odkaz na jedinou stránku, která bude mimo hlavní web, kde bude celé portfolio. Upřesníme v průběhu tvorby.

---

## SEKCE: REFERENCE

Obrázek na pozadí sekce: Obrazky/harmonicky-web-3.jpg

[Nadpis nad sekcí (dekorativní)]
Proč si klienti vybírají mě

[H2]
Co ŘÍKAJÍ ti, kteří už svůj web mají?

[Reference 1 — text]
Na Aničku jsem se obrátila, když jsem potřebovala přesunout svůj web na jinou platformu. Navíc jsem se potřebovala trefit do časového okna mezi dvěma kampaněmi, takže celý přesun byl časově docela napnutý.
Anička odvedla perfektní práci. Krásně se trefila do mé představy vizuálu, web je funkční, přehledný a v pozadí mám vytvořené další stránky, které postupně naplním obsahem, až přijde jejich čas.
Moc si cením i Aniččiny jasné a transparetní komunikace a schopnosti srozumitelně vysvětlit technické věci i takové techno-lamě jako jsem já.
Vše klaplo podle plánu a nijak mi to nezdrželo plán kampaní. Rozhodně spolupráci doporučuji.

[Reference 1 — autor]
Alena Hanušová
Byznys astroložka a mentorka, alenahanusova.cz
Obrázek: Obrazky/reference-alena-hanusova.jpg

[Reference 2 — text]
Potřeboval jsem vytvořit web, který bude kvůli mé činnosti opravdu osobitý a autentický.
Měl jsem velké štěstí, že jsem se dostal k Aničce. Jako webařka dokáže propojit intuici, výtvarné cítění i zdravý rozum, a právě tahle kombinace je podle mě pro tvorbu webu ideální.
Z mých textů vybrala to nejdůležitější, dala jim smysluplné flow a celé to nádherně barevně vyladila. Opravdu profesionální práce!

[Reference 2 — autor]
Rudolf Guzik
Profesionální kouč, rudolfguzik.cz
Obrázek: Obrazky/reference-rudolf-guzik.jpg

[Reference 3 — text]
S Aničkou dlouhodobě spolupracuji na mých online projektech a prodejních stránkách.
Anička má naprosto unikátní schopnost vystihnout tu správnou esenci. Tu vibraci, kterou chcete na svém webu zachytit, a zároveň kterou potřebují vaši klienti vidět a cítit.
Její weby jsou nejen technicky naprosto precizní, ale i esteticky krásné a jedinečné v tom, že přesně ladí s potřebami klienta i jeho zákazníka, pro kterého jsou tvořeny.
Jsem s Aniččinou péčí nadmíru spokojená a její webovou tvorbu s radostí doporučuji.

[Reference 3 — autor]
Žaneta Ariati
Soul mentorka a byznys čarodějka
Obrázek: Obrazky/reference-zaneta-ariati.jpg

[CTA tlačítko]
Chci taky svůj web

---

## SEKCE: JAK WEB PROMĚNÍ PODNIKÁNÍ

Obrázek: Obrazky/harmonicky-web-4.jpg

[Nadpis nad sekcí (dekorativní)]
Víc, než jen hezké stránky

[H2]
Jak může web PROMĚNIT vaše podnikání?

[Benefit 1 — H3]
Přiláká ty správné klienty

[Benefit 1 — text]
Váš web bude jako magnet přitahovat přesně ty klienty, se kterými chcete pracovat. Klienty, kteří ocení vaši jedinečnost a hodnotu vašich služeb.

[Benefit 2 — H3]
Buduje důvěru automaticky

[Benefit 2 — text]
I když odpočíváte nebo pracujete s jinými klienty, váš web dál pracuje za vás. Buduje důvěru a přesvědčuje návštěvníky o vaší expertíze.

[Benefit 3 — H3]
Šetří váš drahocený čas

[Benefit 3 — text]
Můžete přestat donekonečna vysvětlovat, co přesně děláte a pro koho. Váš web to vysvětlí za vás — jasně, přehledně a přesvědčivě.

[Benefit 4 — H3]
Odliší vás od konkurence

[Benefit 4 — text]
V záplavě ostatních webů bude ten váš vyčnívat. Autentický, harmonický a přesně vystihující to, čím se lišíte a co vás dělá výjimečnými.

[CTA tlačítko]
Chci svůj web

Ikony k benefitům: Obrazky/logo-male.png

---

## SEKCE: KONTAKT

Obrázek: Obrazky/harmonicky-web-5.jpg

[Nadpis nad sekcí (dekorativní)]
Pojďme do toho společně

[H2]
To, co TVOŘÍTE, si zaslouží být vidět

[Perex / úvodní text kontaktní sekce]
A já vám s tím ráda pomůžu. Napište mi a domluvíme si krátké setkání online nebo osobně v Olomouci či okolí. Probereme, jak by mohl váš web vypadat a já vám vše srozumitelně vysvětlím, abyste se cítili v klidu. Těším se na vás!

[H3 (kontaktní údaje)]
Ozvěte se mi

[Email]
anna@harmonickyweb.cz

[Telefon]
+420 732 789 199

[Kontaktní formulář — pole]
Jméno a příjmení *
Emailová adresa *
Telefonní číslo
Zpráva *
ODESLAT

[Kontaktní formulář — GDPR text pod formulářem]
Kontaktní údaje slouží pouze pro vyřízení vašeho dotazu a nebudou použity pro žádné další účely.

---

## SEKCE: PATIČKA (FOOTER)

Logo: Obrazky/logo-paticka.png
Webdesignérka pro Olomouc a okolí

[H3] Ozvěte se mi
anna@harmonickyweb.cz
+420 732 789 199

[H3] Anna Mlčochová
Třebčínská 335, 783 49 Lutín
IČ: 01622757
Fyzická osoba zapsaná v Živnostenském rejstříku od 22. 4. 2013. (malým a nenápadným písmem)

[H3] Spolupracuji s
Logo: Obrazky/logo-webykvalitne.png
webykvalitne.cz
Logo: Obrazky/logo-webkitty.png
webkitty.cz

[Copyright]
Copyright © 2026 Anna Mlčochová. Všechna práva vyhrazena. Webdesign harmonickyweb.cz (funkční odkaz s proklikem na novou stránku, zvýraznění odkazu dle barev webu)
