import React from 'react'
import { PageWrapper } from '../../shared/components/wrapper/DefaultWrapper'
import { PageAnimation } from '../../shared/components/animations/Animation'
import CategoryPageHeader from './components/CategoryPageHeader/CategoryPageHeader'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import CategoryTable from './components/Table/CategoryTable'

const CategoriesPage = () => {
    return (
        <PageAnimation>
            <PageWrapper title={'Categories'}>
                <CategoryPageHeader />
                <CategoryFilter />
                <div className="overflow-x-auto">
                    <CategoryTable />
                </div>
            </PageWrapper>
        </PageAnimation>
    )
}

export default CategoriesPage