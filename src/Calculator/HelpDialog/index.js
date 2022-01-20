import { Component, Fragment } from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle 
} from '@mui/material'

class HelpDialog extends Component {

    constructor(props) {
        super(props)
        this.handle_close = this.handle_close.bind(this)
    }

    handle_close = e => {
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render = () => <Dialog
        open = {this.props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"        
    >
        <DialogTitle id="alert-dialog-title">
          Помощь (Help)
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <p>RUS</p>

            <p>Калькулятор стоимости слитков металла</p>

            <p>Вычисления производятся из расчета на один слиток. При расчетах для массового производства не забывайте учитывать шанс на получения дополнительного объема ресурса зависящий от типа вспомогательных материалов, снаряжения и прочих факторов.</p>

            <p>Для произведения расчета вам следует ввести текущую рыночную стоимость материалов. Не советуют брать минимальную стоимость, она может быть занижена игроками желающими продать быстро небольшой объем.</p>

            <p>Если вы хотите использовать собственные материалы, укажите значение цены равное нулю на имеющийся у вас материал.</p>

            <p>Вычисления производятся автоматически, подтверждения не требуется. Вы сразу видите результат.</p>

            <p>Введенные данные сохраняются на стороне пользователя в хранилище броузера, благодаря чему введенные вами значения не пропадут после обновления страницы или перезахода. Хотя не будут отображаться в случае использования другого броузера или при входе с другого устройства.</p>

            <p>ENG</p>

            <p>New World: Ingot Price Calculator</p>

            <p>Calculations are made on the basis of one ingot. When calculating for mass production, do not forget to take into account the chance of obtaining an additional amount of resource depending on the type of auxiliary materials, equipment, and other factors.</p>

            <p>To calculate, you must enter the current market value of the materials. It is not advised to take the minimum value, it can be underestimated by players who want to quickly sell a small amount.</p>

            <p>If you want to use your own materials, enter a price value of zero for the material you have.</p>

            <p>Calculations are made automatically, confirmation is not required. You immediately see the result.</p>

            <p>The entered data is stored on the user side in the browser storage, so that the values you entered will not be lost after a page refresh or reload. Although they will not be displayed if you use a different browser or when you log in from another device.</p>

          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.handle_close}>
            Закрыть
          </Button>
        </DialogActions>
        
    </Dialog>

}

export default HelpDialog