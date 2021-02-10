<template>
    <article itemscope itemtype="http://schema.org/Article">
        <meta itemprop="publisher" content="metatag-generator.com" />
        <meta itemprop="image" content="https://metatag-generator.com/preview.png" />
        <section itemprop="articleBody" class="flex col m-t-2 m-y-block-2">
            <div class="flex row center">
                <h1 itemprop="name headline" class="text h-1 m-y-2">
                    Was sind die wichtigsten Meta Tags?
                </h1>
            </div>
            <p class="text h-6">
                Inhalt
            </p>
            <nav class="text h-6">
                <a class="link primary" href="#title-tag">1. Der Titel Tag</a> <br />
                <a class="link primary" href="#meta-description">2. Die Meta Beschreibung</a> <br />
                <a class="link primary" href="#alt-text">3. Der alternativ Text für Bilder</a> <br />
                <a class="link primary" href="#social-media">4. Meta Tags für soziale Medien wie Facebook, Twitter und co.</a> <br />
                <a class="link primary" href="#meta-charset">5. Meta-Charset</a> <br />
                <a class="link primary" href="#meta-viewport">6. Meta-Viewport</a> <br />
            </nav>


            <h2 class="text h-3">
                Erst mal. Was sind überhaupt Meta Tags?
            </h2>
            <blockquote class="text h-6">
                Meta Tags sind versteckte für den User und befinden sich im <strong>&lt;head&gt;...&lt;/head&gt;</strong> Tag einer Webseite.
                Meta Tags sind dafür da, den Inhalt einer Webseite zu beschreiben, sodass Suchmaschinen ihn in den Suchergebnissen präsentieren können.
            </blockquote>
            <blockquote class="text h-6">
                Hier sind die <strong>wichtigsten Meta Tags</strong> nach Priorität für <strong>Suchmaschinenoptimierung</strong> (SEO) sortiert beschrieben:
            </blockquote>

            <h2 id="title-tag" class="text h-3">
                1. Der Titel Tag
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;title&gt;Hier kommt dein Titel rein.&lt;/title&gt;
            </code>
            <blockquote class="text h-6">
                Der Titel Tag ist das Erste, was ein User in den Suchergebnissen von ihrer Webseite sieht, deswegen ist er der 
                wichtigste Tag für Suchmaschinenoptimierung (SEO). 
            </blockquote>
            <p class="text h-6">
                So sieht der optimale Titel Tag aus:
            </p>
            <ul class="text h-6">
                <li>• Sollte nicht länger als <strong>70 Zeichen</strong> sein.</li>
                <li>• Maximal <strong>580 pixel</strong> sonst wird der Titel auf Desktops abgeschnitten.</li>
                <li>• Primärkeyword muss am Anfang stehen.</li>
                <li>• Füg Zahlen hinzu z.B. "Die <strong>5</strong> wichtigsten Keywörter für SEO in 2021."</li>
                <li>• Benutze nicht zu viele Keywörter. (<a class="link primary" target="_blank" rel="noreferrer noopener" href="https://www.seo-kueche.de/lexikon/keyword-stuffing/">Keyword stuffing</a>)</li>
                <li>• Jede Seite sollte ein einzigartigen Titel haben.</li>
            </ul>


            <h2 id="meta-description" class="text h-3">
                2. Die Meta Beschreibung
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta name="description" content="Hier kommt deine Meta Beschreibung rein." /&gt;
            </code>
            <blockquote class="text h-6">
                Die Beschreibung wird von Suchmaschinen wie Google zwar nicht mehr für <a class="link primary" target="_blank" rel="noreferrer noopener" href="https://de.wikipedia.org/wiki/Suchmaschinenoptimierung">Suchmaschinenoptimierung (SEO)</a> verwendet, 
                ist aber dennoch wichtig für die Webpräsenz. Der Inhalt von <strong>content="..."</strong> wird in den Suchergebnissen direkt unter dem Titel angezeigt.
            </blockquote>
            <p class="text h-6">
                So sieht die optimale Meta Beschreibung aus:
            </p>
            <ul class="text h-6">
                <li>• Sollte nicht länger als <strong>160 Zeichen</strong> sein.</li>
                <li>• Maximal <strong>920 pixel</strong> breit für Desktops und <strong>680 pixel</strong> für Smartphones, sonst wird der Text abgeschnitten.</li>
                <li>• Keywörter von dem Titel müssen enthalten sein.</li>
                <li>• Genau Beschreiben, was man von der Webseite zu erwarten hat.</li>
                <li>• <strong>Keine</strong> Aufforderung wie: "Kaufen sie jetzt!". (<a class="link primary" target="_blank" rel="noreferrer noopener" href="https://de.wikipedia.org/wiki/Call_to_Action_(Marketing)">Call-to-action</a>)</li>
            </ul>


            <h2 id="alt-text" class="text h-3">
                3. Der alternativ Text für Bilder
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;img src="..." alt="Hier kommt die Bildbeschreibung rein." /&gt;
            </code>
            <blockquote class="text h-6">
                Das Alt-Tag ist für alle Bilder wichtig, da Suchmaschinen nicht alle Bilder lesen können.
                Daher muss jeder <strong>&lt;img /&gt;</strong> Tag ein Alt-Text haben, damit die Suchmaschine das Bild lesen kann.
            </blockquote>
            <p class="text h-6">
                So sieht die optimale Bildbeschreibung aus:
            </p>
            <ul class="text h-6">
                <li>• Maximal <strong>50 Zeichen</strong> lang.</li>
                <li>• Kurzer und beschreibener Text, das man direkt verstehen kann, um was es sich auf dem Bild handelt.</li>
                <li>• Die Datei Größe von Bildern sollte so klein wie möglich sein.</li>
            </ul>

            <h2 id="social-media" class="text h-3">
                4. Meta Tags für soziale Medien wie Facebook, Twitter und co.
            </h2>
            <blockquote class="text h-6">
                Wenn jemand deine Webseite auf Facebook, Twitter und co. verlinkt, geben die Plattformen eine Möglichkeit, den Link "schön" darzustellen.
            </blockquote>
            <h3 class="text h-5">
                Open Graph Tags:
            </h3>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta property="og:type" content="website" /&gt; <br />
                &lt;meta property="og:title" content="Der Titel von deiner Webseite" /&gt; <br />
                &lt;meta property="og:description" content="Die Beschreibung von deiner Webseite" /&gt; <br />
                &lt;meta property="og:image" content="Ein Vorschau Bild als Url" /&gt; <br />
                &lt;meta property="og:url" content="Die Url deiner Webseite" /&gt; <br />
            </code>
            <h3 class="text h-5">
                Twitter Cards:
            </h3>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta property="twitter:card" content="summary_large_image" /&gt; <br />
                &lt;meta property="twitter:title" content="Der Titel von deiner Webseite" /&gt; <br />
                &lt;meta property="twitter:description" content="Die Beschreibung von deiner Webseite" /&gt; <br />
                &lt;meta property="twitter:image" content="Ein Vorschau Bild als Url" /&gt; <br />
                &lt;meta property="twitter:url" content="Die Url deiner Webseite" /&gt; <br />
            </code>


            <h2 id="meta-charset" class="text h-3">
                5. Meta-Charset
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta charset="UTF-8" /&gt;
            </code>
            <blockquote class="text h-6">
                Der Meta-Charset-Tag setzt die Codierung für eine Webseite fest.
                Er beschreibt, wie der Browser die Webseite anzeigen soll, damit zum Beispiel Umlaute richtig dargestellt werden.
            </blockquote>

            <h2 id="meta-viewport" class="text h-3">
                6. Meta-Viewport
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
            </code>
            <blockquote class="text h-6">
                Der Meta-Viewport beschreibt, wie der sichtbare Bereich einer Webseite dargestellt werden soll.
                Er wird dafür genutzt, um dem Browser zu mitzuteilen, wie eine Seite für verschiedene Bildschirmgrößen aussehen soll.
            </blockquote>
        </section>
    </article>
</template>

<style scoped>
    li {
        list-style-type: none;
    }
</style>