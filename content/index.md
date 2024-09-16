---
title: No, Not Notes
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

Daily (or more) notes of my undergrad studies. Hopefully complete on or within the next <code class="countdown"></code>.
___
# Acknowledgements
For the actual site, its components, and its styling:

| Contributor                                        | Contribution                                                                                                                                                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Jacky](https://github.com/jackyzha0)              | [Quartz](https://github.com/jackyzha0/quartz), the best static site builder around.                                                                            |
| [MikeKneeB](https://github.com/MikeKneeB)          | [OverlayExplorer](https://github.com/MikeKneeB/quartz-site/tree/main) addendum for Quartz, implementing explorer functionality into mobile viewports.          |
| [Eileen Zhang](https://github.com/fanteastick)     | [Random Page Button](https://quartz.eilleeenz.com/) from her cute website, with code from t-schreibs. Found this out from MassiveJuice.                        |
| [MassiveJuice](https://github.com/MasssiveJuice08) | [Callouts, Columns, Info boxes, and more](https://morrowind-modding.github.io/contributing/custom-formatting-features) from other sources adapted into Quartz. |
