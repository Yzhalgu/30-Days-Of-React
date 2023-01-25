import math from "mathjs";

class Statistic {
    constructor(...ages) {
        this.ages = ages
    }

    count() {
        return this.ages.length
    }

    sum() {
        return this.ages.reduce((acc,cur)=>acc+cur,0)
    }

    min() {
        return Math.min(this.ages)
    }

    max() {
        return Math.max(this.ages)
    }

    range() {
        return this.max()-this.min()
    }

    mean() {
        return this.sum()/this.count()
    }

    median() {
        const nums = this.ages.sort((a,b) => a-b)
        const mid = Math.floor(this.count()/2)
        return this.count()%2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
    }

    mode() {
        let countingMode = []
        this.ages.forEach((number)=>{
            if (countingMode.indexOf(number) === -1){
                countingMode.push({number,counting: 0})
            } else {
                countingMode.find(number)
            }
        })
    }

    variance() {
        return math.var(this.ages)
    }

    standardDev() {
        return math.std(this.ages)
    }

    frequencyDist() {
        const frequency = {}
        for (let i = 0; i < this.ages.length; i++){
            frequency[this.ages[i]] = (frequency[this.ages[i]||0]) +1
        }
        return frequency
    }
}
