      let a = ''
			let compteur = 0

			const succesList = [
				{ seuil: 0, texte: "aucun pour l'instant" },
				{ seuil: 1, texte: "bouton novice" },
				{ seuil: 10, texte: "Débutant du bouton" },
				{ seuil: 25, texte: "boutonneur du quartier" },
				{ seuil: 50, texte: "Tu n'as vraiment rien d'autre à faire ?" },
				{ seuil: 67, texte: "non je ne vais pas le faire !" },
				{ seuil: 100, texte: "bouton amélioré" },
				{ seuil: 250, texte: "tu n'as SÉRIEUSEMENT rien d'autre a faire ?" },
				{ seuil: 404, texte: "404 pas trouvé" },
				{ seuil: 413, texte: "erreur 413, je suis une théière" },
				{ seuil: 500, texte: "bouton de bronze" },
				{ seuil: 666, texte: "O_O" }
			];

			function nbr() {
				if (confirm('tu veux mettre un nombre ?')) {
					a = (prompt("tu veux mettre quoi comme nombre ?"))
					if (a === null || a === '' ) {
						a = 'rien car tu as refusé au début !'
						document.getElementById('a').textContent = a;
					} else {
						if (isNaN(a)) {
							alert("c'est pas un nombre !")
							nbr() // ce midi j'ai mangé des pâtes avec du chili et du fromage râpé
						} else {
							a = parseInt(a)
							document.getElementById('a').textContent = a;
						}
					}
				} else {
					a = 'rien car tu as refusé au début !'
					document.getElementById('a').textContent = a;
				}
				localStorage.setItem('a', a)
			}

			function btnclick() {
				compteur = compteur + 1
				document.getElementById('btn').textContent = compteur;
				MàJBadge()
				localStorage.setItem('compteur', compteur)
				if (document.getElementById('btn-checkbox').checked) {
					alert("BOUTONNNNNNNNNNNNN")
				}
			}
			function MàJBadge() {
				for (let i = 0; i < succesList.length; i++) {
        			let s = succesList[i];
        			let nextSeuil = i + 1 < succesList.length ? succesList[i + 1].seuil : Infinity;
        			if (compteur >= s.seuil && compteur < nextSeuil) {
            			document.getElementById('badge').textContent = s.seuil + ": " + s.texte;
					}
				}
			}
			function demarage() {
				//initialisation du bios avec le fichier d'1.543ko
				MàJBadge()
				if (localStorage.getItem("case") === null) {
					localStorage.setItem("case", false)
				}
				let LSa = localStorage.getItem('a')
				if ( LSa !== null ) {
					a = LSa
					document.getElementById('a').textContent = a;
				} else { nbr() }

				let LSc = localStorage.getItem('compteur')
				if ( LSc !== null ) {
					compteur = parseInt(LSc)
					document.getElementById('btn').textContent = compteur;
				} MàJBadge()
				if (localStorage.getItem("case") === "true") {
					document.getElementById("btn-checkbox").checked = true;
				} else {
					document.getElementById("btn-checkbox").checked = false;
				}
			}
			function btnckbxclick() {
				if (localStorage.getItem("case") === "true") {
					localStorage.setItem("case", false)
				} else {
					localStorage.setItem("case", true)
				}
			}
