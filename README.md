# DrinkShop-Angular

A weboldalt ezen a linken tudod elérni: https://drinkshop-p.web.app/home

Ha leosztályoztad akkor nagyon örülnék neki ha a pontszámot megosztanád velem:
  - Neptun kódom: WY6B0L
  - Discord azonosítóm: Patrik_21#5592

Előre is köszi, valamint kellemes javítást kívánok :)



<details>
  <summary>Egy kis segítség:</summary>


  Ami a javításban nem 100% egyértelmű és lehet nem tudnád kifejteni csak a kódból:
    - Amikor CRUD-ot teszteled az Admin Menü oldalon akkor Updatelni úgy tudod a rekordokat hogy az alatta lévő táblázatba kattintasz és az vissza viszi az adatokat a formba, amit majd értelemszerűen ott kell átírnod és újra lefuttatnod.

  PS: Ha nem teljesen egyértelmű akkor leírom: A választott témám az Italdiszkont volt.


</details>

## Pontszám számítási segédlet:

1. Fordítási hiba nincs (1p)
    - Szerintem nincs, ezt au F12 megnyomásával tudod nézni hogy találsz-e ott errort.

2. Futtatási hiba nincs (1p)
    - Szintén, szerintem nincs, ha esetleg valamit találsz a weboldalon ami nem működik akkor nyugodtan vond le a pontot.

3. Firebase Hosting URL (létezik, és minden végpont megfelelő módon betöltődik) (1p)
    - Igen működik minden, ezt le is tesztelheted ha benyitottad az oldalt.

4. Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció)) (2p)
    - Őszintén ez nem tudom mit jelent, szóval ebben nem tudok segíteni, én sem tudom hogy meg van-e, de én nem számoltam magamnak.

5. Alkalmazás felbontása megfelelő számú komponensre (egyetlen komponens TS és HTML kódja sem haladja meg a 250 sort és soronként a 400 karaktert) (1p)
    - Ez is megvan, minden szét van szedve, nincs egy TypeScript vagy HTML file sem ami 250+ sor vagy ilyesmi, de ha szeretnéd leellenőrizheted.

6. Reszponzív, mobile-first felület (minden adat látható és jól jelenik meg böngészőben is, mobil nézetben is) (2p) (1 + 1)
    - Ez is megvan, böngészőben nagyon jól működik szerintem, mobilon már nem olyan nagyon epic de megoldottam hogy minden content látható legyen, az én telefonomon jól működött, ha le akarod tesztelni akkor nyisd meg telefonos böngészőben az oldalt.

7. Legalább 2 különböző attribútum direktíva használata (1p) (0.5 + 0.5)
    - Már megint, sajnos ezt nem tudom mit jelent szóval nem tudok segíteni, de ezt nem is számoltam magamnak.

8. Legalább 2 különböző strukturális direktíva használata (1p)
    - Ez bőven megvan, elvileg for és if ciklus számít ennek biztos könnyen találsz ezekből jónéhányat, mivel mindenhol kellett ahol termékeket listáztam ki az adatbázisból.

9. Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output) (1p)
    - Ez nem tudom micsoda, magamnak nem is számoltam.

10. Legalább 10 különböző Material elem helyes használata.
    - Ez bőven megvan elvileg, tele van a kód minden része material elemekkel, nem sokat kell keresned hogy találj a weboldalon vagy a kódban.

11. Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2) (2p)
    - Ezek például a belépés és regisztráció

12. Legalább 1 saját Pipe osztály írása és használata (2p)
    - Szerintem ilyen nincs

13. Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen) (1p)
    - Nem vagyok benne biztos, én nem számoltam rá pontot magamnak.

14. CRUD műveletek mindegyike megvalósult (Promise, Observable használattal) (4p)
    - Igen ez mind megvan, ha beléptél akkor az Admin Menü oldalon tudod tesztelni a létrehozást, a kiíratást, a frissítést és a törlést is.

15. CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek (1p)
    - Szerintem igen, nincs semmi "third-party művelet komponensből meghívás"

16. Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen) (1p)
    - Igen ez is megvan

17. Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás) (4p)
    - Ez is megvan, lekérédezésekkel van megvalósítva a különböző italok felsorolása, amik rendezve is vannak ár szerint, ezt a kódot pl: Borok komponens TS filejában találhatod, oda van meghívva a függvény amit src > app > components > shared > item.service.ts -ben írtam meg, ide van megírva az összes lekérdezés.

18. Legalább 4 különböző route a különböző oldalak eléréséhez (1p)
    - Ezt instant le bírod ellenőrizni amint beléptél hozzáférsz több mint 4 oldalhoz.

19. Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)
    - Csak regisztrált és belépett felhasználó tudja elérni az oldalakat, amíg nem léptél be addig csak a főoldalt tudod megtekinteni, a többi esetén vissza dob a belépő felületre.

20. Szubjektív pontozás a projekt egészére vonatkozólag (mennyire fedi le a projekt a témakört (mennyire kapcsolódik hozzá), mennyi lehet a befektetett energia a projektben)
    - Ez teljesen rajtad áll, remélem eléggé lefedi az Italdiszkont témakört a weboldalam, a befektetett energia elég sok volt, de ha te is megcsináltad akkor lehet egyet értesz velem hogy nem volt valami könnyű, a weboldalon minden saját, nem kölcsönöztem sehonnan sem semmi design elemet, mindent materiallal és css-el oldottam meg. 

  <details>
  <summary>Pontszám:</summary>


  Én magamnak elég szigorúan 26 pontot számoltam úgy hogy az utolsó szubjektív 6 pontból nullát adtam magamnak, nem kell így értékelned csak ha valahol ekörül van az adott pontszámod az utolsó 6 pont nélkül akkor tudd hogy egész pontosan adtad meg. 

  És ha lehetséges akkor mégegyszer kérném hogy írd meg nekem valamelyik platformon az értékelés eredményét, megköszönném valamint lehetséges hogy én is javítottam a tiéd. 

  Valamint ha bármi kérdés van, valami a fenti pontozási segédlet ellenére sem egyértelmű akkor Discordon szinte mindig elérhető vagyok nyugodtan írj rám.

  További szép napot és sikeres vizsgaidőszakot! :)


</details>
