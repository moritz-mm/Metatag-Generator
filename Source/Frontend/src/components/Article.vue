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
            <hr class="hr" />
            <p class="text h-6">
                Inhalt
            </p>
            <nav class="text h-5 m-y-block-1">
                <a class="link primary" href="#title-tag">1. Title Tag</a> <br />
                <a class="link primary" href="#meta-description">2. Meta Description</a> <br />
                <a class="link primary" href="#alt-text">3. Alt Text für Bilder</a> <br />
                <a class="link primary" href="#social-media">4. Open Graph Tags und Twitter Cards</a> <br />
                <a class="link primary" href="#meta-charset">5. Meta-Charset</a> <br />
                <a class="link primary" href="#meta-viewport">6. Meta-Viewport</a> <br />
            </nav>


            <h2 class="text h-3">
                Erst mal. Was sind überhaupt Meta Tags?
            </h2>
            <p class="text h-6">
                <abbr class="abbr" title="Hypertext Markup Language">HTML</abbr> Meta Tags sind versteckte für den User und befinden sich im <strong>&lt;head&gt;...&lt;/head&gt;</strong> Tag einer Webseite.
                Meta Tags sind dafür da, den Inhalt einer Webseite zu beschreiben, sodass Suchmaschinen ihn in den Suchergebnissen präsentieren können.
            </p>
            <p class="text h-6">
                Hier sind die <strong>wichtigsten Meta Tags</strong> nach Priorität für <strong>Suchmaschinenoptimierung</strong> (<abbr class="abbr" title="Suchmaschinenoptimierung">SEO</abbr>) sortiert beschrieben:
            </p>

            <h2 class="text h-3">
                Welche Meta Tags sind wichtig für SEO?
            </h2>
            <p class="text h-6">
                Die SEO-Community ist sich bei diesem Thema einig: Der wichtigste Meta-Tag für das Ranking ist der Titel-Tag.
            </p>
            <p class="text h-6">
                Kein anderer Meta-Tag im <strong>&lt;head&gt;...&lt;/head&gt;-Bereich</strong> sonst beeinflusst das SEO-Ranking ansich.
                Das heißt aber nicht, dass andere Tags auf der gesamten Webseite unwichtig sind!
            </p>
            <h2 class="text h-5">
                Das war nicht immer so...
            </h2>
            <p class="text h-6">
                In der Vergangenheit war der <strong>&lt;keyword&gt;...&lt;/keyword&gt;-Meta-Tag</strong> ein wichtiger Bestandteil des Rankings, da frühe Suchmaschinen-Roboter diesen Wert zur Kategorisierung von Webseiten verwendet haben.
            </p>
            <p class="text h-6">
                Im Jahr 2009 machte <a class="link primary" target="_blank" ref="noreferrer noopener" href="https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag">Google jedoch offiziell</a>, dass der <strong>&lt;keyword&gt;...&lt;/keyword&gt;-Meta-Tag</strong> nicht mehr Teil des Rankings ist und Ihr Ranking potenziell sogar <strong>beeinträchtigen</strong> kann, wenn er missbraucht wird.
            </p>

            <h2 id="title-tag" class="text h-3">
                1. Title Tag
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;title&gt;Hier kommt dein Titel rein.&lt;/title&gt;
            </code>
            <p class="text h-6">
                Der Titel Tag ist das Erste, was ein User in den Suchergebnissen von ihrer Webseite sieht, deswegen ist er der 
                wichtigste Tag für Suchmaschinenoptimierung (<abbr class="abbr" title="Suchmaschinenoptimierung">SEO</abbr>). 
            </p>
            <p class="text h-6">
                So sieht der optimale Titel Tag aus:
            </p>
            <ul class="text h-6">
                <li>• Sollte nicht länger als <strong>70 Zeichen</strong> sein.</li>
                <li>• Maximal <strong>580 pixel</strong> sonst wird der Titel auf Desktops abgeschnitten.</li>
                <li>• Primärkeyword muss am Anfang stehen.</li>
                <li>• Füg Zahlen hinzu z.B. "Die <strong>5</strong> wichtigsten Keywörter für <abbr class="abbr" title="Suchmaschinenoptimierung">SEO</abbr> in 2021."</li>
                <li>• Benutze nicht zu viele Keywörter. (<a class="link primary" target="_blank" rel="noreferrer noopener" href="https://www.seo-kueche.de/lexikon/keyword-stuffing/">Keyword stuffing</a>)</li>
                <li>• Jede Seite sollte ein einzigartigen Titel haben.</li>
            </ul>


            <h2 id="meta-description" class="text h-3">
                2. Meta Description
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta name="description" content="Hier kommt deine Meta Beschreibung rein." /&gt;
            </code>
            <p class="text h-6">
                Die Beschreibung wird von Suchmaschinen wie Google zwar nicht mehr für <a class="link primary" target="_blank" rel="noreferrer noopener" href="https://de.wikipedia.org/wiki/Suchmaschinenoptimierung">Suchmaschinenoptimierung (<abbr class="abbr" title="Suchmaschinenoptimierung">SEO</abbr>)</a> verwendet, 
                ist aber dennoch wichtig für die Webpräsenz. Der Inhalt von <strong>content="..."</strong> wird in den Suchergebnissen direkt unter dem Titel angezeigt.
            </p>
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
                3. Alt Text für Bilder
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;img src="..." alt="Hier kommt die Bildbeschreibung rein." /&gt;
            </code>
            <p class="text h-6">
                Das Alt-Tag ist für alle Bilder wichtig, da Suchmaschinen nicht alle Bilder lesen können.
                Daher muss jeder <strong>&lt;img /&gt;</strong> Tag ein Alt-Text haben, damit die Suchmaschine das Bild lesen kann.
            </p>
            <p class="text h-6">
                So sieht die optimale Bildbeschreibung aus:
            </p>
            <ul class="text h-6">
                <li>• Maximal <strong>50 Zeichen</strong> lang.</li>
                <li>• Kurzer und beschreibener Text, das man direkt verstehen kann, um was es sich auf dem Bild handelt.</li>
                <li>• Die Datei Größe von Bildern sollte so klein wie möglich sein.</li>
            </ul>

            <h2 id="social-media" class="text h-3">
                4. Open Graph Tags und Twitter Cards
            </h2>
            <p class="text h-6">
                Open Graph-Meta-Tags sollen beschreiben, wie URLs auf sozialen Medien grafisch dargestellt werden.
            </p>
            <p class="text h-6">
                Sie sind Teil des Open-Graph-Protokolls von <strong>Facebook</strong> und werden auch von anderen Social-Media-Webseiten verwendet, wie zum Beispiel: <strong>Pinterest</strong>, <strong>Linkedin</strong> und <strong>Twitter</strong> (wenn Twitter Cards nicht vorhanden sind).
            </p>
            <p class="text h-6">
                Sie befinden sich im <strong>&lt;head&gt;...&lt;/head&gt;-Bereich</strong> einer Webseite und haben ein og: Präfix vor dem Propertynamen.
            </p>
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
            <p class="text h-6">
                Der Meta-Charset-Tag setzt die Codierung für eine Webseite fest.
                Er beschreibt, wie der Browser die Webseite anzeigen soll, damit zum Beispiel Umlaute richtig dargestellt werden.
            </p>

            <h2 id="meta-viewport" class="text h-3">
                6. Meta-Viewport
            </h2>
            <code class="box neutral round p-a-1 text h-6">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
            </code>
            <p class="text h-6">
                Der Meta-Viewport beschreibt, wie der sichtbare Bereich einer Webseite dargestellt werden soll.
                Er wird dafür genutzt, um dem Browser zu mitzuteilen, wie eine Seite für verschiedene Bildschirmgrößen aussehen soll.
            </p>
        </section>
    </article>
</template>

<style scoped>
    li {
        list-style-type: none;
    }
</style>