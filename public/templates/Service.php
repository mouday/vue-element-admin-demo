<?php


namespace app\service;

use app\model\{{config.pascalName}}Model;


class {{config.pascalName}}Service
{
    private static function getEditData($params)
    {
        $data = [
          {% for item in config.props %}
          '{{ item.prop }}'           => $params['{{ item.prop }}'],
          {% endfor %}
        ];

        return $data;
    }

    private static function get{{config.pascalName}}Query($where = null)
    {
        $keywords = array_get($where, 'keywords');
        $is_show  = array_get($where, 'is_show');

        $query = {{config.pascalName}}Model::newQuery();

        $query->with(['category', 'user']);

        $query->append(['tags', 'head_image', 'head_images']);

        if ($keywords) {
            $query->whereLike('title', '%' . $keywords . '%');
        }

        if (in_array($is_show, [0, 1], $strict = true)) {
            $query->where('is_show', '=', $is_show);
        }

        return $query;
    }


    public static function get{{config.pascalName}}Count($where)
    {
        $result = self::get{{config.pascalName}}Query($where)
            ->count();

        return $result;
    }

    public static function get{{config.pascalName}}List($where)
    {
        $page = array_get($where, 'page');
        $size = array_get($where, 'size');

        $result = self::get{{config.pascalName}}Query($where)
            ->order(['top_time' => 'desc', 'create_time' => 'desc'])
            ->page($page, $size)
            ->select();

        return $result;
    }


    public static function create{{config.pascalName}}($data)
    {
        $createData = self::getEditData($data);

        $createData['user_id'] = $data['user_id'];

        $result = {{config.pascalName}}Model::create($createData);

        return $result;
    }

    public static function update{{config.pascalName}}($data)
    {
        $updateData = self::getEditData($data);

        $result = {{config.pascalName}}Model::where('id', '=', $data['id'])
            ->update($updateData);

        return $result;
    }

    public static function delete{{config.pascalName}}($id)
    {
        $result = {{config.pascalName}}Model::where('id', '=', $id)
            ->delete();

        return $result;
    }

    public static function get{{config.pascalName}}ById($id)
    {

        $result = self::get{{config.pascalName}}Query()
            ->find($id);

        return $result;
    }

    public static function show{{config.pascalName}}($id)
    {
        $result = {{config.pascalName}}Model::where('id', '=', $id)
            ->update(['is_show' => 1]);

        return $result;
    }

    public static function hidden{{config.pascalName}}($id)
    {
        $result = {{config.pascalName}}Model::where('id', '=', $id)
            ->update(['is_show' => 0]);

        return $result;
    }
}
