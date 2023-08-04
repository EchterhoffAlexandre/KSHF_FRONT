export const chartDataStructure = (period, data) => {
    
        function getPeriodLabel (period) {
            if (period === 'dayly'){
                return 'Dépenses journalière'
            } else if (period === 'weekly'){
                return 'Dépenses hebdomadaire'
            } else if (period === 'monthly'){
                return 'Dépense mensuel '
            } else if (period === 'yearly'){
                return 'Dépense annuel'
            }

        }
        return {
        labels:data? data.map(transaction => transaction.name):["Toujours pas de dépenses aujourd'hui ! Bravo"],
        datasets: [
          {
            label:getPeriodLabel(period) ,
            data:data? data.map(transaction => transaction.amount):[0],
            backgroundColor: ["#FF6294", "#44C768", "#66ACFF"],
          },
        ],
      };
}
