import { Component, Fragment } from 'react'

import { 
    Container, 
    AppBar,
    Toolbar,
    Typography,
    Paper,
    TextField,
    CssBaseline,
    IconButton,
    Box,
    Dialog
} from '@mui/material';

import HelpDialog from "./HelpDialog"

import HelpIcon from '@mui/icons-material/Help';

class Calculator extends Component {

    constructor(props) {

        super(props)

        this.IRON_ORE_PER_IRON_INGOT = 4

        this.IRON_INGOT_PER_STEEL_INGOT = 3
        this.FLUX_PER_STEEL_INGOT = 1
        this.CHARCOAL_PER_STEEL_INGOT = 2

        this.STARMETAL_ORE_PER_STARMETAL_INGOT = 6
        this.STEEL_INGOT_PER_STARMETAL_INGOT = 2
        this.FLUX_PER_STARMETAL_INGOT = 1
        this.CHARCOAL_PER_STARMETAL_INGOT = 2

        this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT = 8
        this.STARMETAL_INGOT_PER_ORICHALCUM_INGOT = 2
        this.FLUX_PER_ORICHALCUM_INGOT = 1
        this.CHARCOAL_PER_ORICHALCUM_INGOT = 2

        this.SILVER_ORE_PER_SILVER_INGOT = 4
        
        this.GOLD_ORE_PER_GOLD_INGOT = 5
        this.SILVER_INGOT_PER_GOLD_INGOT = 2
        this.FLUX_PER_GOLD_INGOT = 1

        this.PLATINUM_ORE_PER_PLATINUM_INGOT = 6
        this.GOLD_INGOT_PER_PLATINUM_INGOT = 2
        this.FLUX_PER_PLATINUM_INGOT = 1

        this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT_PLATINUM = 8
        this.PLATINUM_INGOT_PER_ORICHALCUM_INGOT_PLATINUM = 3
        this.FLUX_PER_ORICHALCUM_INGOT_PLATINUM = 1
        this.CHARCOAL_PER_ORICHALCUM_INGOT_PLATINUM = 2

        this.ORICHALCUM_INGOT_PER_ASMODEUM = 5
        this.CINNABAR_PER_ASMODEUM = 1
        this.TOLVIUM_PER_ASMODEUM = 1
        this.FLUX_PER_ASMODEUM = 1
        this.CHARCOAL_PER_ASMODEUM = 2

        const storage = window.localStorage

        let fluxPrice = storage.getItem("fluxPrice") || 0
        let charcoalPrice = storage.getItem("charcoalPrice") || 0
        let ironOrePrice = storage.getItem("ironOrePrice") || 0
        let starmetalOrePrice = storage.getItem("starmetalOrePrice") || 0
        let orichalcumOrePrice = storage.getItem("orichalcumOrePrice") || 0
        let silverOrePrice = storage.getItem("silverOrePrice") || 0
        let goldOrePrice = storage.getItem("goldOrePrice") || 0
        let platinumOrePrice = storage.getItem("platinumOrePrice") || 0
        let tolviumPrice = storage.getItem("tolviumPrice") || 0
        let cinnabarPrice = storage.getItem("cinnabarPrice") || 0

        this.state = {
            fluxPrice,
            charcoalPrice,
            ironOrePrice,
            starmetalOrePrice,
            orichalcumOrePrice,
            silverOrePrice,
            goldOrePrice,
            platinumOrePrice,
            tolviumPrice,
            cinnabarPrice,

            helpDialog_open: false,
        }

        this.handle_changePrice_flux = this.handle_changePrice_flux.bind(this)
        this.handle_changePrice_charcoal = this.handle_changePrice_charcoal.bind(this)

        this.handle_changePrice_ironOre = this.handle_changePrice_ironOre.bind(this)
        this.handle_changePrice_starmetalOre = this.handle_changePrice_starmetalOre.bind(this)
        this.handle_changePrice_orichalcumOre = this.handle_changePrice_orichalcumOre.bind(this)

        this.handle_changePrice_silverOre = this.handle_changePrice_silverOre.bind(this)
        this.handle_changePrice_goldOre = this.handle_changePrice_goldOre.bind(this)
        this.handle_changePrice_platinumOre = this.handle_changePrice_platinumOre.bind(this)
        
        this.handle_changePrice_cinnabar = this.handle_changePrice_cinnabar.bind(this)
        this.handle_changePrice_tolvium = this.handle_changePrice_tolvium.bind(this)

        this.handle_showHelpDialog = this.handle_showHelpDialog.bind(this)
        this.handle_hideHelpDialog = this.handle_hideHelpDialog.bind(this)

    }

    handle_showHelpDialog = e => {
        this.setState({helpDialog_open: true})
    }

    handle_hideHelpDialog = e => {
        this.setState({helpDialog_open: false})
    }

    handle_changePrice_flux = e => {
        const storage = window.localStorage
        let fluxPrice = e.target.value
        storage.setItem("fluxPrice", fluxPrice)
        this.setState({fluxPrice})
    }

    handle_changePrice_charcoal = e => {
        const storage = window.localStorage
        let charcoalPrice = e.target.value
        storage.setItem("charcoalPrice", charcoalPrice)
        this.setState({charcoalPrice})
    }

    handle_changePrice_ironOre = e => {
        const storage = window.localStorage
        let ironOrePrice = e.target.value
        storage.setItem("ironOrePrice", ironOrePrice)
        this.setState({ironOrePrice})
    }

    handle_changePrice_starmetalOre = e => {
        const storage = window.localStorage
        let starmetalOrePrice = e.target.value
        storage.setItem("starmetalOrePrice", starmetalOrePrice)
        this.setState({starmetalOrePrice})
    }

    handle_changePrice_orichalcumOre = e => {
        const storage = window.localStorage
        let orichalcumOrePrice = e.target.value
        storage.setItem("orichalcumOrePrice", orichalcumOrePrice)
        this.setState({orichalcumOrePrice})
    }

    handle_changePrice_silverOre = e => {
        const storage = window.localStorage
        let silverOrePrice = e.target.value
        storage.setItem("silverOrePrice", silverOrePrice)
        this.setState({silverOrePrice})
    }

    handle_changePrice_goldOre = e => {
        const storage = window.localStorage
        let goldOrePrice = e.target.value
        storage.setItem("goldOrePrice", goldOrePrice)
        this.setState({goldOrePrice})
    }

    handle_changePrice_platinumOre = e => {
        const storage = window.localStorage
        let platinumOrePrice = e.target.value
        storage.setItem("platinumOrePrice", platinumOrePrice)
        this.setState({platinumOrePrice})
    }

    handle_changePrice_cinnabar = e => {
        const storage = window.localStorage
        let cinnabarPrice = e.target.value
        storage.setItem("cinnabarPrice", cinnabarPrice)
        this.setState({cinnabarPrice})
    }

    handle_changePrice_tolvium = e => {
        const storage = window.localStorage
        let tolviumPrice = e.target.value
        storage.setItem("tolviumPrice", tolviumPrice)
        this.setState({tolviumPrice})
    }

    getPrice_ironIngot = () => this.state.ironOrePrice * this.IRON_ORE_PER_IRON_INGOT

    getPrice_ironIngotPerSteelIngot = () => this.getPrice_ironIngot() * this.IRON_INGOT_PER_STEEL_INGOT
    getPrice_fluxPerSteelIngot = () => this.state.fluxPrice * this.FLUX_PER_STEEL_INGOT
    getPrice_charcoalPerSteelIngot = () => this.state.charcoalPrice * this.CHARCOAL_PER_STEEL_INGOT
    getPrice_steelIngot = () => this.getPrice_ironIngotPerSteelIngot() + this.getPrice_fluxPerSteelIngot() + this.getPrice_charcoalPerSteelIngot()

    getPrice_starmetalOrePerStarmetalIngot = () => this.state.starmetalOrePrice * this.STARMETAL_ORE_PER_STARMETAL_INGOT
    getPrice_steelIngotPerStarmetalIngot = () => this.getPrice_steelIngot() * this.STEEL_INGOT_PER_STARMETAL_INGOT
    getPrice_fluxPerStarmetalIngot = () => this.state.fluxPrice * this.FLUX_PER_STARMETAL_INGOT
    getPrice_charcoalPerStarmetalIngot = () => this.state.charcoalPrice * this.CHARCOAL_PER_STARMETAL_INGOT
    getPrice_starmetalIngot = () => this.getPrice_starmetalOrePerStarmetalIngot() + this.getPrice_steelIngotPerStarmetalIngot() + this.getPrice_fluxPerStarmetalIngot() + this.getPrice_charcoalPerStarmetalIngot()

    getPrice_orichalcumOrePerOrichalcumIngot = () => this.state.orichalcumOrePrice * this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT
    getPrice_starmetalIngotPerPerOrichalcumIngot = () => this.getPrice_starmetalIngot() * this.STARMETAL_INGOT_PER_ORICHALCUM_INGOT    
    getPrice_fluxPerOrichalcumIngot = () => this.state.fluxPrice * this.FLUX_PER_ORICHALCUM_INGOT
    getPrice_charcoalPerOrichalcumIngot = () => this.state.charcoalPrice * this.CHARCOAL_PER_ORICHALCUM_INGOT
    getPrice_orichalcumIngot = () => this.getPrice_orichalcumOrePerOrichalcumIngot() + this.getPrice_starmetalIngotPerPerOrichalcumIngot() + this.getPrice_fluxPerOrichalcumIngot() + this.getPrice_charcoalPerOrichalcumIngot()

    getPrice_silverIngot = () => this.state.silverOrePrice * this.SILVER_ORE_PER_SILVER_INGOT

    getPrice_goldOrePerGoldIngot = () => this.state.goldOrePrice * this.GOLD_ORE_PER_GOLD_INGOT
    getPrice_silverIngotPerGoldIngot = () => this.getPrice_silverIngot() * this.SILVER_INGOT_PER_GOLD_INGOT 
    getPrice_fluxPerGoldIngot = () => this.state.fluxPrice * this.FLUX_PER_GOLD_INGOT
    getPrice_goldIngot = () => this.getPrice_goldOrePerGoldIngot() + this.getPrice_silverIngotPerGoldIngot() + this.getPrice_fluxPerGoldIngot()

    getPrice_platinumOrePerPlatinumIngot = () => this.state.platinumOrePrice * this.PLATINUM_ORE_PER_PLATINUM_INGOT
    getPrice_goldIngotPerPlatinumIngot = () => this.getPrice_goldIngot() * this.GOLD_INGOT_PER_PLATINUM_INGOT
    getPrice_fluxPerPlatinumIngot = () => this.state.fluxPrice * this.FLUX_PER_PLATINUM_INGOT
    getPrice_platinumIngot = () => this.getPrice_platinumOrePerPlatinumIngot() + this.getPrice_goldIngotPerPlatinumIngot() + this.getPrice_fluxPerPlatinumIngot()

    getPrice_orichalcumOrePerOrichalcumIngotPlatinum = () => this.state.orichalcumOrePrice * this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT_PLATINUM
    getPrice_platinumIngotPerOrichalcumIngotPlatinum = () => this.getPrice_platinumIngot() * this.PLATINUM_INGOT_PER_ORICHALCUM_INGOT_PLATINUM
    getPrice_fluxPerOrichalcumIngotPlatinum = () => this.state.fluxPrice * this.FLUX_PER_ORICHALCUM_INGOT_PLATINUM
    getPrice_charcoalPerOrichalcumIngotPlatinum = () => this.state.charcoalPrice * this.CHARCOAL_PER_ORICHALCUM_INGOT_PLATINUM 
    getPrice_orichalcumIngotPlatinum = () => this.getPrice_orichalcumOrePerOrichalcumIngotPlatinum() + this.getPrice_platinumIngotPerOrichalcumIngotPlatinum() + this.getPrice_fluxPerOrichalcumIngotPlatinum() + this.getPrice_charcoalPerOrichalcumIngotPlatinum()

    getPrice_orichalcumIngotPerAsmodeum = () => this.getPrice_orichalcumIngot() * this.ORICHALCUM_INGOT_PER_ASMODEUM
    getPrice_cinnabarPerAsmodeum = () => this.state.cinnabarPrice * this.CINNABAR_PER_ASMODEUM
    getPrice_tolviumPerAsmodeum = () => this.state.tolviumPrice * this.TOLVIUM_PER_ASMODEUM
    getPrice_fluxPerAsmodeum = () => this.state.fluxPrice * this.FLUX_PER_ASMODEUM
    getPrice_charcoalPerAsmodeum = () => this.state.charcoalPrice * this.CHARCOAL_PER_ASMODEUM
    getPrice_asmodeum = () => this.getPrice_orichalcumIngotPerAsmodeum() + this.getPrice_cinnabarPerAsmodeum() + this.getPrice_tolviumPerAsmodeum() + this.getPrice_fluxPerAsmodeum() + this.getPrice_charcoalPerAsmodeum()
    
    render = () => <Fragment>

        <CssBaseline />

        <HelpDialog 
            open={this.state.helpDialog_open}
            onClose={this.handle_hideHelpDialog}
        />

        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div">
                    New World: Ingot Price Calculator
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                    <IconButton 
                        size="large"
                        color="inherit"
                        onClick={this.handle_showHelpDialog}
                    >
                        <HelpIcon/>
                    </IconButton >
            </Toolbar>
        </AppBar>

        <Container sx={{pb: 2}}>

            {/* Orichalcum ingot */}

            <Typography 
                    variant="h4" 
                    component="div"
                    sx = {{m: 2, mt: 4}}
            >
                Orichalcum ingot
            </Typography>            

            <Paper sx={{p:2, mt:2}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Prices
                </Typography>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "ironOrePrice"
                        label = "Iron ore"
                        value = {this.state.ironOrePrice}
                        onChange = {this.handle_changePrice_ironOre}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "starmetalOrePrice"
                        label = "Starmetal ore"
                        value = {this.state.starmetalOrePrice}
                        onChange = {this.handle_changePrice_starmetalOre}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "orichalcumOrePrice"
                        label = "Orichalcum ore"
                        value = {this.state.orichalcumOrePrice}
                        onChange = {this.handle_changePrice_orichalcumOre}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "fluxPrice"
                        label = "Flux"
                        value = {this.state.fluxPrice}
                        onChange = {this.handle_changePrice_flux}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        id = "charcoalPrice"
                        label = "Charcoal"
                        value = {this.state.charcoalPrice}
                        onChange = {this.handle_changePrice_charcoal}
                    />
                </div>            

            </Paper>

            <Paper sx={{p:2, mt:1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Iron ingot
                </Typography>

                Iron ore x{this.IRON_ORE_PER_IRON_INGOT} = {this.getPrice_ironIngot().toFixed(2)} gold
                <hr />
                Total: {this.getPrice_ironIngot().toFixed(2)} gold
                
            </Paper>

            <Paper sx={{p:2, mt:1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Steel ingot
                </Typography>

                Iron ingot x{this.IRON_INGOT_PER_STEEL_INGOT} = {this.getPrice_ironIngotPerSteelIngot().toFixed(2)} gold<br />
                Flux x{this.FLUX_PER_STEEL_INGOT} = {this.getPrice_fluxPerSteelIngot().toFixed(2)} gold<br />
                Charcoal x{this.CHARCOAL_PER_STEEL_INGOT} = {this.getPrice_charcoalPerSteelIngot().toFixed(2)} gold
                <hr />
                Total: {this.getPrice_steelIngot().toFixed(2)} gold

            </Paper>

            <Paper sx={{p:2, mt:1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Starmetal ingot
                </Typography>

                Starmetal ore x{this.STARMETAL_ORE_PER_STARMETAL_INGOT} = {this.getPrice_starmetalOrePerStarmetalIngot().toFixed(2)} gold <br />
                Steel ingot x{this.STEEL_INGOT_PER_STARMETAL_INGOT} = {this.getPrice_steelIngotPerStarmetalIngot().toFixed(2)} gold <br />
                Flux x{this.FLUX_PER_STARMETAL_INGOT} = {this.getPrice_fluxPerStarmetalIngot().toFixed(2)} gold <br />
                Charcoal x{this.CHARCOAL_PER_STARMETAL_INGOT} = {this.getPrice_charcoalPerStarmetalIngot().toFixed(2)} gold
                <hr />
                Total: {this.getPrice_starmetalIngot().toFixed(2)} gold

            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Orichalcum ingot
                </Typography>

                Orichalcum ore x{this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT} = {this.getPrice_orichalcumOrePerOrichalcumIngot().toFixed(2)} gold<br/>
                Starmetal ingot x{this.STARMETAL_INGOT_PER_ORICHALCUM_INGOT} = {this.getPrice_starmetalIngotPerPerOrichalcumIngot().toFixed(2)} gold<br/>
                Flux x{this.FLUX_PER_ORICHALCUM_INGOT} = {this.getPrice_fluxPerOrichalcumIngot().toFixed(2)} gold<br/>
                Charcoal x{this.CHARCOAL_PER_ORICHALCUM_INGOT} = {this.getPrice_charcoalPerOrichalcumIngot().toFixed(2)} gold
                <hr/>
                Total: {this.getPrice_orichalcumIngot().toFixed(2)} gold
                            
            </Paper>

            {/* Orichalcum ingot (Platinum) */}

            <Typography 
                    variant="h4" 
                    component="div"
                    sx = {{m: 2, mt: 4}}
            >
                Orichalcum ingot (Platinum)
            </Typography>            

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Prices
                </Typography>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "silverOrePrice"
                        label = "Silver ore"
                        value = {this.state.silverOrePrice}
                        onChange = {this.handle_changePrice_silverOre}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "goldOrePrice"
                        label = "Gold ore"
                        value = {this.state.goldOrePrice}
                        onChange = {this.handle_changePrice_goldOre}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        id = "platinumOrePrice"
                        label = "Platinum ore"
                        value = {this.state.platinumOrePrice}
                        onChange = {this.handle_changePrice_platinumOre}
                    />
                </div>

            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Silver ingot
                </Typography>

                Silver ore x{this.SILVER_ORE_PER_SILVER_INGOT} = {this.getPrice_silverIngot().toFixed(2)} gold
                <hr />
                Total: {this.getPrice_silverIngot().toFixed(2)} gold
                            
            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Gold ingot
                </Typography>

                Gold ore x{this.GOLD_ORE_PER_GOLD_INGOT} = {this.getPrice_goldOrePerGoldIngot().toFixed(2)} gold<br/>
                Silver ingot x{this.SILVER_INGOT_PER_GOLD_INGOT} = {this.getPrice_silverIngotPerGoldIngot().toFixed(2)} gold<br/>
                Flux x{this.FLUX_PER_GOLD_INGOT} = {this.getPrice_fluxPerGoldIngot().toFixed(2)} gold
                <hr/>
                Total: {this.getPrice_goldIngot().toFixed(2)} gold
                            
            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Platinum ingot
                </Typography>

                Platinum ore x{this.PLATINUM_ORE_PER_PLATINUM_INGOT} = {this.getPrice_platinumOrePerPlatinumIngot().toFixed(2)} gold<br/>
                Gold ingot x{this.GOLD_INGOT_PER_PLATINUM_INGOT} = {this.getPrice_goldIngotPerPlatinumIngot().toFixed(2)} gold<br/>
                Flux x{this.FLUX_PER_PLATINUM_INGOT} = {this.getPrice_fluxPerPlatinumIngot().toFixed(2)} gold
                <hr/>
                Total: {this.getPrice_platinumIngot().toFixed(2)} gold
                            
            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Orichalcum ingot (platinum)
                </Typography>

                Orichalcum ore x{this.ORICHALCUM_ORE_PER_ORICHALCUM_INGOT_PLATINUM} = {this.getPrice_orichalcumOrePerOrichalcumIngotPlatinum().toFixed(2)} gold<br/>
                Platinum ingot x{this.PLATINUM_INGOT_PER_ORICHALCUM_INGOT_PLATINUM} = {this.getPrice_platinumIngotPerOrichalcumIngotPlatinum().toFixed(2)} gold<br/>
                Flux x{this.FLUX_PER_ORICHALCUM_INGOT_PLATINUM} = {this.getPrice_fluxPerOrichalcumIngotPlatinum().toFixed(2)} gold<br/>
                Charcoal x{this.CHARCOAL_PER_ORICHALCUM_INGOT_PLATINUM} = {this.getPrice_charcoalPerOrichalcumIngotPlatinum().toFixed(2)} gold
                <hr/>
                Total: {this.getPrice_orichalcumIngotPlatinum().toFixed(2)} gold
                            
            </Paper>

            {/* Asmodeum */}

            <Typography 
                    variant="h4" 
                    component="div"
                    sx = {{m: 2, mt: 4}}
            >
                Asmodeum ingot
            </Typography>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Prices
                </Typography>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "cinnabarPrice"
                        label = "Cinnabar"
                        value = {this.state.cinnabarPrice}
                        onChange = {this.handle_changePrice_cinnabar}
                    />
                </div>

                <div>
                    <TextField 
                        fullWidth
                        type = "number"
                        sx = {{mb: 2}}
                        id = "tolviumPrice"
                        label = "Tolvium"
                        value = {this.state.tolviumPrice}
                        onChange = {this.handle_changePrice_tolvium}
                    />
                </div>

            </Paper>

            <Paper sx={{p: 2, mt: 1}}>

                <Typography 
                    variant="h5" 
                    component="div"
                    sx = {{mb: 2}}
                >
                    Asmodeum ingot
                </Typography>

                Orichalcum ingot x{this.ORICHALCUM_INGOT_PER_ASMODEUM} = {this.getPrice_orichalcumIngotPerAsmodeum().toFixed(2)} gold<br/>
                Cinnabar x{this.CINNABAR_PER_ASMODEUM} = {this.getPrice_cinnabarPerAsmodeum().toFixed(2)} gold<br/>
                Tolvium x{this.TOLVIUM_PER_ASMODEUM} = {this.getPrice_tolviumPerAsmodeum().toFixed(2)} gold<br/>
                Flux x{this.FLUX_PER_ASMODEUM} = {this.getPrice_fluxPerAsmodeum().toFixed(2)} gold<br/>
                Charcoal x{this.CHARCOAL_PER_ASMODEUM} = {this.getPrice_charcoalPerAsmodeum().toFixed(2)} gold
                <hr/>
                Total: {this.getPrice_asmodeum().toFixed(2)} gold
                            
            </Paper>            

        </Container>

    </Fragment>
    
}

export default Calculator