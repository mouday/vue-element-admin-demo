<?php

namespace app\controller;

use app\service\{{config.pascalName}}Service;
use app\BaseController;

class {{config.pascalName}}Controller extends BaseController
{
    /**
     * 列表
     * @return array
     */
    public function get{{config.pascalName}}List()
    {
        $where = [
            'page'     => input('page', 1),
            'size'     => input('size', 10),
            'keywords' => input('keywords'),
            'is_show'  => input('is_show'),
        ];

        $total = {{config.pascalName}}Service::get{{config.pascalName}}Count($where);
        $list  = {{config.pascalName}}Service::get{{config.pascalName}}List($where);

        $data = [
            'total' => $total,
            'list'  => $list
        ];

        return $data;

    }

    /**
     * 创建
     * @return array
     */
    public function create{{config.pascalName}}()
    {
        $data = input('');

        $data['user_id'] = request()->userId;

        $result = {{config.pascalName}}Service::create{{config.pascalName}}($data);

        return $result;
    }

    /**
     * 更新
     * @return array
     */
    public function update{{config.pascalName}}()
    {
        $data = input('');

        // $data['user_id'] = request()->userId;

        $result = {{config.pascalName}}Service::update{{config.pascalName}}($data);

        return $result;
    }

     /**
     * 删除
     * @return array
     */
    public function delete{{config.pascalName}}()
    {
        $id = input('id');

        // $data['user_id'] = request()->userId;

        $result = {{config.pascalName}}Service::delete{{config.pascalName}}($id);

        return $result;
    }

     /**
     * 详情
     * @return array
     */
    public function get{{config.pascalName}}ById()
    {
        $id = input('id');

        $result = {{config.pascalName}}Service::get{{config.pascalName}}ById($id);

        return $result;
    }


     /**
     * 显示
     * @return array
     */
    public function show{{config.pascalName}}()
    {
        $id = input('id');

        $result = {{config.pascalName}}Service::show{{config.pascalName}}($id);

        return $result;
    }

    /**
     * 隐藏
     * @return array
     */
    public function hidden{{config.pascalName}}()
    {
        $id = input('id');

        $result = {{config.pascalName}}Service::hidden{{config.pascalName}}($id);

        return $result;
    }

}
