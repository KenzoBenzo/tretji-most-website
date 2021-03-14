import React from "react";
import { Box, Heading, Text, Flex, Link, Image } from "@chakra-ui/react";
import { DoubleSection } from "../components/double-section";

const HowWeWorkPage = () => {
	return (
		<>
			<Flex mb={64} direction={["column", "row"]}>
				<Box w="50%" h="400px" py={32} px={40}>
					<Heading as="h1" fontSize="48px">
						Kako delujemo
					</Heading>

					<Text fontSize="md" mt={8}>
						Tukaj si lahko preberete o vseh nasih dejavnostih, solanju ter
						srecanjih, ki jih izvajamo ter kdaj smo zaceli s kulturno iniciativo
						TM.
					</Text>
				</Box>

				<Box
					bgGradient="linear(to-b, blue.50, blue.100, blue.200, blue.300, blue.400, blue.500,blue.600, blue.700,blue.800, blue.900)"
					w="50%"
					h="400px"
					p={32}
					zIndex={0}
					borderBottomLeftRadius="lg"
				>
					<Image
						src="https://media.graphcms.com/Az4WqNJVTyCCzeyaj5rE"
						borderRadius="lg"
						maxH="400px"
					/>
				</Box>
			</Flex>

			<DoubleSection
				heading="Predavanja"
				anchor="lectures"
				text="Jeseni, leta 2018, so se v Ljubljani začela prva srečanja skupine Tretji Most. Študijska in delovna skupina, ki jo vodimo Nataša, Marko in Tomaž je najprej pripravila vrsto predavanj na temo impulza arhangela Mihaela. V študijskem letu 2019/20 smo nadaljevali z umetniškim pristopom do živalskega carstva. Poleg predavanj, smo se lotili obdelovanja gline in lesa ter risanja z ogljem. Vzporedno s tem so petekale priprave na prvo javno razstavo, ki je bila 04.07.2020 v Sežani. V letosnjem studijskem letu, pa so predavanja posvecena rastlinam in spoznavanju goetheanisticnih metod. Aktualni nacrt predavateljskih aktivnosti si lahko preberete v koledarju dogodkov."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection text="Vsebine predavanj so osnovane na studiju duhovne znanosti    (antropozofije). V danasnjem casu so simptomi izgube duhovnosti in posledično nerazumevanje spoznavnih procesov iz dneva v dan mocnejsi. Naravoslovje je v svojem vehementnem razvoju s svojega horizonta izbrisalo obsezne duhovne vsebine in jih prepustilo bodisi vrazeverju, bodisi dogmatizmu. V nasprotju s splosno razsirjenim mnenjem, je v temeljih naravoslovne znanosti kljub temu se vedno ohranjen precejsenj duhovni potencijal. Ena od nalog antropozofije je, da pomaga prebuditi zavest o lepoti in vrednosti teh potencialov na konkretnih primerih.">
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<Box px={32} mb={16} py={16}>
				<Text fontSize={["lg", "xl", "2xl"]} lineHeight="short" mb={3}>
					rez aktivnega sodelovanja na podrocju spoznavanja ni mogoce prodreti
					dovolj globoko! Zato so predavanja zasnovana tudi kot vstopni impulz
					za tovrstno aktivnost na umetniskih delavnicah. Obicajno je torej neko
					predavanje zastavljen tako, da je v njem mogoce najti spodbudo za
					kreativno oblikovanje. V nadaljevanju sledijo delavnice z enako ali
					sorodno tematiko. <br /> Seveda pa lahko vsakdo, ob predhodni prijavi
					v{" "}
					<Link color="teal.500" href="/calendar/">
						koledarju dogodkov
					</Link>
					, obisce posamezno predavanje kot mu to dopusca cas in v skladu s
					svojimi interesi. Prijavite se lahko *tukaj/prijava na predavanje*
					Vljudno vabljeni!
				</Text>
			</Box>

			<DoubleSection
				heading="Delavnice"
				anchor="workshops"
				text="Naše dosedanje delavnice so bile osredotočene na risanje in kiparstvo. V skladu s studijsko tematiko bo v letosnjem studijskem letu prevladovalo slikanje z barvami. Pri tem bomo spoznali nekaj temeljnih prijemov, ki jih narekuje poznavanje tehnike akvarela. Posebno poglavje bo posveceno Goethejevi teoriji barv in fizikalno opticnim eksperimentom na to temo."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection text="Poleg individualnih stvaritev, je posebnost nasega sodelovanja v tem, da obstaja moznost povezovanja kreativnosti posameznika v vecje sklope, ne da bi se pri tem morali odrekati individualni inventivnosti posameznika. Kako izgleda primer takega povezovanja, si lahko ogledate na primeru nase *razstave v Sezani*.">
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<Box px={32} mb={16} py={16}>
				<Text fontSize={["lg", "xl", "2xl"]} lineHeight="short" mb={3}>
					Umetniška produkcija je zelo sorodna metodam duhovne znanosti. V tem
					je njena posebnost, v tem se skriva njena moč, pa tudi njena
					senzibilnost in krhkost. Zavedamo se: senzibilnost moramo negovati,
					krhkost zaščititi in moč pravilno usmerjati. Kot pri duhovni znanosti,
					antropozofiji, tudi tukaj brez volje pač ne gre, a kdor je se je kdaj
					udeležil kakšnega našega srečanja, bo lahko poročal, da smo včasih -
					vsled pomanjkanja optimalnih pogojev - morali improvizirati, da pa
					nečesa gotovo ni primanjkovalo, namreč - dobre volje. Bodisi da jo
					imate prevec, ali pa vam jo obcasno primanjkuje: pridite in podelite z
					nami!
				</Text>
			</Box>

			<DoubleSection
				heading="Kulturni dogodki"
				anchor="culturalEvents"
				text="Navadili smo se, da so umetnine dokument stiske; figure so veckrat izmaličene, raztelešene itd. Ravno to je določenim skupinam všečno; to je ljudem blizu, v tem čutijo neko resničnost – ne da bi pravzaprav jasno vedeli zakaj. V današnjem času prevladuje kult telesnosti in enostransko izpodriva tročlenost človeškega bitja kot celote. Tretji Most želi pokazati, da so možne številne alternative in da pobglobljeno spoznavanje globin clovekovega bitja nikakor ne vodi v stilizirano, dogmatsko ali kakorkoli drugace osiromaseno umetnost, temvec ravno obratno."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection text="Naša dosedanja produkcija je bila osredotocena na risanje, kiparstvo in gledalisko igro. Obenem smo vkljucili tudi sodelovanje z evritmisti, glasbeniki in drugimi ustvarjalci. Pri tem je pomembno, da spoštujemo posebnost vsakega umetniškega medija, njegov elementarni izvor. Kar je o neki tematiki izreceno v kiparstvu isce svojo dopolnitev v drami in evritmiji; kar nastane v arhitekturi isce svoj odmev v glazbeni umetnosti. V orkestru, v katerem se lahko vsakdo izraza tako, kakor mu je bilo „grlo ustvarjeno“, ni potrebno, da bi oboa oponasala violino in flavta klavir. Obstaja pa seveda nujnost, da vsi sledijo eni kompoziciji.">
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<Box px={32} mb={16} py={16}>
				<Text fontSize={["lg", "xl", "2xl"]} lineHeight="short" mb={3}>
					Umetniška produkcija je zelo sorodna metodam duhovne znanosti. V tem
					je njena posebnost, v tem se skriva njena moč, pa tudi njena
					senzibilnost in krhkost. Zavedamo se: senzibilnost moramo negovati,
					krhkost zaščititi in moč pravilno usmerjati. Kot pri duhovni znanosti,
					antropozofiji, tudi tukaj brez volje pač ne gre, a kdor je se je kdaj
					udeležil kakšnega našega srečanja, bo lahko poročal, da smo včasih -
					vsled pomanjkanja optimalnih pogojev - morali improvizirati, da pa
					nečesa gotovo ni primanjkovalo, namreč - dobre volje. Bodisi da jo
					imate prevec, ali pa vam jo obcasno primanjkuje: pridite in podelite z
					nami!
				</Text>
			</Box>

			<DoubleSection
				heading="Solanje"
				anchor="schooling"
				text="Navadili smo se, da so umetnine dokument stiske; figure so veckrat izmaličene, raztelešene itd. Ravno to je določenim skupinam všečno; to je ljudem blizu, v tem čutijo neko resničnost – ne da bi pravzaprav jasno vedeli zakaj. V današnjem času prevladuje kult telesnosti in enostransko izpodriva tročlenost človeškega bitja kot celote. Tretji Most želi pokazati, da so možne številne alternative in da pobglobljeno spoznavanje globin clovekovega bitja nikakor ne vodi v stilizirano, dogmatsko ali kakorkoli drugace osiromaseno umetnost, temvec ravno obratno."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>
		</>
	);
};

export default HowWeWorkPage;
