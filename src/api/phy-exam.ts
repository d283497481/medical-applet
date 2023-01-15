/*
 * @Date: 2023-01-15 16:41:28
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-15 22:16:45
 * @Description: 这是体检套餐相关请求文件
 */
import $http from "@/server"
import { PhyQuery, Resphy } from '@/types/phy-exam'

// 获取体检筛选条件
export const phyterm = () => $http('/phyterm', 'GET')

// 获取全部体检套餐
export const physget = () => $http('/physget', 'GET')

// 筛选体检套餐
export const phyquery = (data: PhyQuery) => $http('/phyquery', 'POST', data)

// 体检套餐详情页数据
export const phydateil = (id: { id: string}) => $http('/phydateil', 'GET', id)

// 体检预约提交
export const resphy = (data: Resphy) => $http('/resphy', 'POST', data)