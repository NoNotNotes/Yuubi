---
title: No, Not Notes
description: Everything I'll ever study
---
<script type="text/javascript">
    function generateCountdown() {
        let element = document.getElementsByClassName('countdown')[0];
        let msRemaining = Date.parse('2025-11-9') - new Date();
        element.innerHTML = Math.floor(msRemaining / 1000 / 86400) + ' days';
    }

    if (window.addEventListener) { // For modern browsers
        window.addEventListener('load', generateCountdown, false);        // On initial load
        window.addEventListener('pageshow', generateCountdown, false);    // On navigation back
    } else if (window.attachEvent) { // For older IE browsers
        window.attachEvent('onload', generateCountdown);
        window.attachEvent('onpageshow', generateCountdown);
    }
</script>

Hopefully complete on or within the next <code class="countdown"></code>. The name saying "No Not Note(s)" is just a bit of wordplay I thought of. These are definitely notes.

>[!FAQ] PDFs?
> I'm avoiding formatting these notes as PDFs because I plan on updating, expanding, and polishing notes as I find more information on them. I'll probably keep updating these even after I graduate (for NCLEX and CPD purposes). If you really want a PDF, [ilovepdf](https://www.ilovepdf.com/html-to-pdf) has an HTML-to-PDF converter that I like, but it's not perfect. Some text can get cut off between pages.

___
# Acknowledgements
For the actual site, its components, and its styling:

| Contributor                                                       | Contribution                                                                                                                                                                                      |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Jacky](https://github.com/jackyzha0)                             | [Quartz](https://github.com/jackyzha0/quartz), the best static site builder around.                                                                                                               |
| [Obsidian](https://github.com/obsidianmd/obsidian-developer-docs) | [Obsidian](https://obsidian.md/) is the markdown note-taking app I use that Quartz primarily bases its root data from! It's free and highly customizable to my aesthetic and functionality needs. |
| [MikeKneeB](https://github.com/MikeKneeB)                         | [OverlayExplorer](https://github.com/MikeKneeB/quartz-site/tree/main) addendum for Quartz, implementing explorer functionality into mobile viewports.                                             |
| [Eileen Zhang](https://github.com/fanteastick)                    | [Random Page Button](https://quartz.eilleeenz.com/) from her cute website, with code from t-schreibs. Found this out from MassiveJuice.                                                           |
| [MassiveJuice](https://github.com/MasssiveJuice08)                | [Callouts, Columns, Info boxes, and more](https://morrowind-modding.github.io/contributing/custom-formatting-features) from other sources adapted into Quartz.                                    |
